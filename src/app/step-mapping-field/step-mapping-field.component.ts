import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-mapping-field',
  template: `
    <div class='formish'>
      <label>{{mapping.name}}</label>
      <input [(ngModel)]='compound' type='checkbox'>
      <ng-container *ngIf='!compound'>
        <select [value]='mapping.columnType' (change)='updateMapping($event.target.value); changed()'>
          <option *ngFor='let ct of taxonomy.columnTypes'
                  [value]='ct.name'>{{ct.title}} - {{ct.description}}
          </option>
        </select>
      </ng-container>
      <div class='compound' *ngIf='compound'>
        <span>
          <select [value]='mapping.normalizeTarget' (change)='mapping.normalizeTarget = $event.target.value; changed()'>
            <option *ngFor='let ct of taxonomy.columnTypes'
                    [value]='ct.title'>{{ct.title}} - {{ct.description}}
            </option>
          </select>
          (<input type='text'
            [(ngModel)]='mapping.normalizeTarget'
            (change)='changed()'
          />)
        </span>
        <span class='for' i18n>for</span>
        <app-extendable-keyvalue-list
          [taxonomy]='taxonomy'
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

  updateMapping(ctName) {
    this.mapping.columnType = ctName;
    console.log('updating type to', ctName);
    for (const ct of this.taxonomy.columnTypes) {
      if (ct.name === ctName) {
        console.log('updating title to', ct.title);
        this.mapping.title = ct.title;
      }
    }
    this.changed();
  }

}
