import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from '../store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-publish',
  template: `
    <app-extra-config-questions [questions]='questions'></app-extra-config-questions>
    <a class='btn btn-primary' (click)='publish()' i18n>
      Load data into database
    </a>
  `,
  styles: [`
    :host {
      padding: 20px;
      min-width: 50%;
    }
  `]
})
export class StepPublishComponent implements OnInit, OnDestroy {

  config: any = null;
  sub: Subscription = null;
  questions = [];

  constructor(private store: StoreService) {}

  ngOnInit() {
    this.sub = this.store.getConfig()
      .subscribe((config) => {
        const publishConfig = (
          config &&
          config.taxonomy &&
          config.taxonomy.settings &&
          config.taxonomy.settings['extra-config'] &&
          config.taxonomy.settings['extra-config'].publish
        );
        if (publishConfig) {
          this.questions = publishConfig;
        }
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
