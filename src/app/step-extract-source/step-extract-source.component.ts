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
    <select [(ngModel)]='source.format' (change)='changed()'>
      <option value='xls'>Excel (xls)</option>
      <option value='xlsx'>Excel (xlsx)</option>
      <option value='csv'>CSV</option>
      <option value='json'>JSON</option>
      <option value='gsheet'>Google Spreadsheet</option>
    </select>
  </div>
  <ng-container *ngIf='source.sheet_names'>
    <div class='formish'>
      <label>Sheet:</label>
      <select [(ngModel)]='source.sheet' (change)='changed()'>
        <option *ngFor='let x of source.sheet_names' [value]='x[1]'>{{x[1]}}</option>
      </select>
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
  <ng-container *ngIf='source.format==="json"'>
    <div class='formish'>
      <label>JSON Path:</label>
      <input type='text'
        [(ngModel)]='source.property'
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

  changed(path?: string) {
    this.update.emit(path);
  }

}
