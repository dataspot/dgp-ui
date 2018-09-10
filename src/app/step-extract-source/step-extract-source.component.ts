import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-extract-source',
  template: `
  <div>
    <label>URL:</label>
    <input type='text'
      [(ngModel)]='source.path'
      (change)='changed()'
    />
  </div>
  <div>
    <label>Format:</label>
    <select [(ngModel)]='source.format' change='changed()'>
      <option value='xls'>Excel</option>
      <option value='csv'>CSV</option>
    </select>
  </div>
  <ng-container *ngIf='source.format==="xls"'>
    <div>
      <label>Sheet:</label>
      <input type='number'
        min="0" max="100"
        [(ngModel)]='source.sheet'
        (change)='changed()'
      />
    </div>
  </ng-container>
  <ng-container *ngIf='source.format==="csv"'>
    <div>
      <label>Encoding:</label>
      <input type='text'
        [(ngModel)]='source.encoding'
        (change)='changed()'
      />
    </div>
  </ng-container>
`,
  styles: []
})
export class StepExtractSourceComponent implements OnInit {

  @Input() source;
  @Output() change = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  changed() {
    this.change.emit();
  }

}
