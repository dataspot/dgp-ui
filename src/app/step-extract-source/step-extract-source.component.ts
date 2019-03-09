import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-extract-source',
  template: `
  <div class='formish'>
    <label>URL:</label>
    <input type='url'
      [(ngModel)]='source.path'
      (change)='changed(source.path)'
    />
  </div>
  <div class='formish'>
    <label>Format:</label>
    <select [(ngModel)]='source.format' change='changed()'>
      <option value='xls'>Excel (xls)</option>
      <option value='xlsx'>Excel (xlsx)</option>
      <option value='csv'>CSV</option>
    </select>
  </div>
  <ng-container *ngIf='source.format==="xls" || source.format==="xlsx"'>
    <div class='formish'>
      <label>Sheet:</label>
      <input type='number'
        min="0" max="100"
        [(ngModel)]='source.sheet'
        (change)='changed()'
      />
    </div>
  </ng-container>
  <ng-container *ngIf='source.format==="csv"'>
    <div class='formish'>
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
  @Output() update = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changed(path: string) {
    this.update.emit(path);
  }

}
