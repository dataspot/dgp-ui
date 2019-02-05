import { Component, OnInit } from '@angular/core';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-step-mapping',
  template: `
    <div class='formish'>
      <label>Taxonomy:</label>
      <select [(ngModel)]='config.taxonomy.id'>
        <option *ngFor='let txid of config.taxonomy.options' [value]='txid.id'>{{txid.title}}</option>
      </select>
    </div>
    <div class='formish missing'
         *ngIf='config.model.missingMandatoryFields.length > 0'>
      <label>Missing Mappings:</label>
      <span>
        <span *ngFor='let txid of config.model.missingMandatoryFields'>
          {{ txid.title }}
        </span>
      </span>
    </div>
    <div class='formish'>
      <label>Constants:</label>
      <app-extendable-keyvalue-list
          [data]='config.constants || {}'
          (update)='config.constants = $event; changed()'
      ></app-extendable-keyvalue-list>
    </div>
    <ng-container *ngIf='config.model && config.taxonomy'>
      <div class='formish'>
        <label>Mapping:</label>
        <div>
          <app-step-mapping-field
            *ngFor='let mapping of config.model.mapping'
            [mapping]='mapping'
            [taxonomy]='config.taxonomy'
            (change)='changed()'
          >
          </app-step-mapping-field>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
        :host {
          padding: 10px;
        }

        .missing span {
          display: flex;
          flex-flow: row;
        }

        .missing span span {
          font-size: 12px;
          list-style: none;
          display: block;
          padding: 1px 15px;
          margin: 0px 10px;
          margin-left: 0;
          border: solid 1px #400;
          border-radius: 10px;
          background-color: #fcc;
        }
    `
      ]
})
export class StepMappingComponent implements OnInit {

  config: any = null;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getConfig().subscribe(config => this.config = config);
  }

  changed() {
    console.log('new config', this.config);
    this.store.setConfig(this.config);
  }

}
