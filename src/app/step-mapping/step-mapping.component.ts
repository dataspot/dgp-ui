import { Component, OnInit } from '@angular/core';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-step-mapping',
  template: `
    <ng-container *ngIf='config.model && config.taxonomy'>
      <app-step-mapping-field
        *ngFor='let mapping of config.model.mapping'
        [mapping]='mapping'
        [taxonomy]='config.taxonomy'
        (change)='this.store.setConfig(config)'
      >
      </app-step-mapping-field>
    </ng-container>
  `,
  styles: []
})
export class StepMappingComponent implements OnInit {

  private config: any = null;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getConfig().subscribe(config => this.config = config);
  }

}
