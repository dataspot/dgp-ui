import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-mapping-field',
  template: `
    <div>
      <span>{{mapping.name}}</span>
      <input type='text'
        [(ngModel)]='mapping.title'
        (change)='changed()'
      />
      <select [(ngModel)]='mapping.columnType'>
        <option *ngFor='let ct of taxonomy.columnTypes' [value]='ct.name'>{{ct.name}}</option>
      </select>
      <div *ngIf='mapping.normalize'>
        <span>For:</span>
        <ng-container *ngFor='let key of objectKeys(mapping.normalize)'>
          <span>{{key}}</span>
          <input type='text'
            [(ngModel)]='mapping.normalize[key]'
            (change)='changed()'
          />
        </ng-container>
      </div>
    </div>
`,
  styles: []
})
export class StepMappingFieldComponent implements OnInit {

  objectKeys = Object.keys;

  @Input() mapping: any;
  @Input() taxonomy: any;
  @Output() change = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changed() {
    this.change.emit();
  }

}
