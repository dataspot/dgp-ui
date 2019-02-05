import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-results',
  template: `
    <app-result-table
      *ngFor='let table of TABLES'
      [kind]='table[0]' [hidden]='step!==table[1]'
      (validate)='validate_kind(table[1], $event)'
    ></app-result-table>
  `,
  styles: [
    `
:host {
  flex: 1 1 auto;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: scroll;
  border-top: 3px double #444;
  max-height: 40%;
}
    `
  ]
})
export class ResultsComponent implements OnInit {

  @Input() step: string;
  @Output() validate = new EventEmitter<{kind: string, valid: boolean}>();

  TABLES = [
    [0, 'extract'],
    [1, 'map'],
    [2, 'enrich'],
    [3, 'publish'],
  ];

  constructor() { }

  ngOnInit() {
  }

  validate_kind(kind: string, valid: boolean) {
    this.validate.emit({kind, valid});
  }

}
