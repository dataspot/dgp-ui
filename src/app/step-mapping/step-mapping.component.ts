import { Component, OnInit, OnDestroy } from '@angular/core';

import { StoreService } from '../store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-mapping',
  template: `
    <div class='formish'>
      <label>Taxonomy:</label>
      <select [(ngModel)]='config.taxonomy.id' (change)='changed()'>
        <option *ngFor='let txid of config.taxonomy.options' [value]='txid.id'>{{txid.title}}</option>
      </select>
    </div>
    <div class='formish missing'
         *ngIf='errors.length > 0'>
      <label>Missing Mappings:</label>
      <span>
        <ng-container *ngFor='let error of errors' >
          <span *ngIf='error[0] === 1' [title]='error[1].description'>
            {{ error[1].title }}
          </span>
        </ng-container>
      </span>
    </div>
    <div class='formish'>
      <label>Constants:</label>
      <app-extendable-keyvalue-list
          [dataList]='config.constants || []'
          (updateList)='config.constants = $event; changed()'
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
          margin-start: 0;
          border: solid 1px #400;
          border-radius: 10px;
          background-color: #fcc;
        }
    `
      ]
})
export class StepMappingComponent implements OnInit, OnDestroy {

  config: any = null;
  errors: any = [];
  subs: Subscription[] = [];
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.subs.push(this.store.getConfig().subscribe(config => this.config = config));
    this.subs.push(this.store.getErrors().subscribe(errors => this.errors = errors));
  }

  changed() {
    this.store.setConfig(this.config);
  }

  ngOnDestroy() {
    for (const s of this.subs) {
      s.unsubscribe();
    }
  }
}
