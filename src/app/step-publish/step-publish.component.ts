import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-publish',
  template: `
    <a class='btn btn-primary' (click)='publish()'>
      Load data into database
    </a>
  `,
  styles: [`
    :host {
      padding: 20px;
    }
  `]
})
export class StepPublishComponent implements OnInit, OnDestroy {

  config: any = null;
  sub: Subscription = null;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.sub = this.store.getConfig().subscribe(config => {
      this.config = config;
    });
  }

  publish() {
    this.config['publish'] = {allowed: true};
    this.store.setConfig(this.config);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
