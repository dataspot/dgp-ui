import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-mapping-field',
  template: `
    <div class='formish'>
      <label>{{mapping.name}}</label>
      <input type='text'
        [(ngModel)]='mapping.title'
        (change)='changed()'
      />
      <input [(ngModel)]='compound' type='checkbox'>
      <ng-container *ngIf='!compound'>
        <select [(ngModel)]='mapping.columnType'>
          <option *ngFor='let ct of taxonomy.columnTypes' [value]='ct.name'>{{ct.title}} - {{ct.description}}</option>
        </select>
      </ng-container>
      <div class='compound' *ngIf='compound'>
        <input type='text'
          [(ngModel)]='mapping.normalizeTarget'
          (change)='changed()'
        />
        <span class='for'>for</span>
        <app-extendable-keyvalue-list
          [data]='mapping.normalize || {}'
          (update)='mapping.normalize = $event; changed()'
        ></app-extendable-keyvalue-list>
      </div>
    </div>
`,
  styles: [`
  .compound {
    display: flex;
    flex-flow: column;
  }
  `]
})
export class StepMappingFieldComponent implements OnInit {

  objectKeys = Object.keys;

  @Input() mapping: any;
  @Input() taxonomy: any;
  @Output() change = new EventEmitter<any>();

  private _compound: boolean;

  constructor() { }

  ngOnInit() {
    this._compound = !!this.mapping.normalize;
  }

  changed() {
    this.change.emit();
  }

  get compound(): boolean {
    return this._compound;
  }

  set compound(value: boolean) {
    if (value) {
      delete this.mapping['columnType'];
      this.mapping['normalize'] = {};
      this.mapping['normalizeTarget'] = '';
    } else {
      delete this.mapping['normalize'];
      delete this.mapping['normalizeTarget'];
      this.mapping['columnType'] = '';
    }
  }

}
