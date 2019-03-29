import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

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
export class StepPublishComponent implements OnInit {

  config: any = null;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getConfig().subscribe(config => {
      this.config = config;
      this.config['publish'] = {allowed: false};
    });
  }

  publish() {
    this.config['publish'] = {allowed: true};
    this.store.setConfig(this.config);
    this.config['publish'] = {allowed: false};
  }

}
