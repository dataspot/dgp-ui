import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from './store.service';
import { Observable, of, Subject, BehaviorSubject  } from 'rxjs';
import { switchMap, exhaustMap, map, filter } from 'rxjs/operators';
import { EventSourcePolyfill } from 'ng-event-source';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private executionId = null;
  private SERVER = '/api';
  private CONFIGS = '/configs';

  public configurations = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient,
              private store: StoreService) {

    const events = (<Observable<any>>(this.store.getConfig()))
         .pipe(
            filter((x: any) => !!x),
            switchMap((config: any) => this.storeConfig(config)),
            switchMap((response: any) => {
              this.executionId = response.uid;
              return this.fetchEvents(this.executionId);
            })
         );
    const that = this;
    const eventObserver = {
      config: null,
      next(event) {
        // console.log('EVENT', event);
        if (event.complete) {
          if (this.config) {
            const config = this.config;
            this.config = null;
            that.store.setConfig(config);
          }
        } else if (event.t) {
          if (event.t === 'c') {
            this.config = event.p;
          } else if (event.t === 'r') {
            if (event.i % 1000 === 0) {
              console.log('ROW', event);
            }
            that.store.addRow({
              kind: event.j,
              index: event.i,
              data: event.p,
              errors: event.e
            });
            that.store.setRowCount({
              kind: event.j,
              index: event.i,
            });
          } else if (event.t === 'n') {
            if (event.i % 1000 === 0) {
              console.log('ROW', event);
            }
            that.store.setRowCount({
              kind: event.j,
              index: event.i,
            });
          } else if (event.t === 'd') {
            that.store.addRow({
              kind: event.j,
              index: -2,
            });
          } else if (event.t === 'e') {
            console.log('got error', event.c, event.p, event.e);
            that.store.setErrors(event.e);
          } else if (event.t === 'f') {
            console.log('got FAILURE', event.e);
            // that.store.setErrors(event.e);
          }
        }
      },
      error() {
      }
    };
    events.subscribe(eventObserver);
  }

  storeConfig(config: any) {
    const suffix = this.executionId ? '?uid=' + this.executionId : '';
    return this.http.post(this.SERVER + '/config' + suffix, config);
  }

  refreshConfigurations() {
    this.http.get(this.CONFIGS)
               .pipe(
                  map((resp: any) => resp.configurations)
               )
               .subscribe((configurations) => {
                 this.configurations.next(configurations);
               });
  }

  fetchEvents(executionId: string) {
    this.store.setErrors([]);
    const observable = Observable.create(observer => {

      let eventSource;
      // this.error.emit(null);
      try {
        eventSource = new EventSourcePolyfill(this.SERVER + '/events/' + this.executionId, {});
      } catch (e) {
        // this.error.emit(e.message);
        observer.error(e);
      }
      eventSource.onmessage = x => {
        if (x.data !== 'close') {
          try {
            const parsed: any = JSON.parse(x.data);
            observer.next(parsed);
          } catch (exception) {
            console.log('Warning - bad data received', x);
            throw exception;
          }
        } else {
          observer.next({complete: true});
          observer.complete();
          eventSource.close();
        }
      };
      eventSource.onerror = x => {
        console.log('ERROR', x);
        // this.error.emit(x.message);
        // observer.error(x);
        observer.next({complete: true});
        observer.complete();
      };

      return () => {
        if (eventSource) {
          eventSource.close();
        }
      };
    });
    return observable;
  }
}
