import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: 'results.component.html',
  styleUrls: ['results.component.less'],
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
