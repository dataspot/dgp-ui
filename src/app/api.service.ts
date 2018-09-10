import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from './store.service';
import { Observable, of, Subject  } from 'rxjs';
import { switchMap, exhaustMap, map } from 'rxjs/operators';
import { EventSourcePolyfill } from 'ng-event-source';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private executionId = null;
  private SERVER = 'http://localhost:8000';

  private _rows = new Subject<any>();

  constructor(private http: HttpClient,
              private store: StoreService) {

    const events = (<Observable<any>>(this.store.getConfig()))
         .pipe(
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
            that.store.addRow({
              kind: event.j,
              index: event.i,
              data: event.p
            })
          }
        }
      },
      error() {
      }
    };
    events.subscribe(eventObserver);
  }

  storeConfig(config: any) {
    const suffix = this.executionId ? '?id=' + this.executionId : '';
    return this.http.post(this.SERVER + '/config' + suffix, config);
  }

  fetchEvents(executionId: string) {
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
        observer.error(x);
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
