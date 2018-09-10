import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-tabs',
  template: `
    <span class='tab'
          [ngClass]='{active: selected === "extract"}'
          (click)='select("extract")'
          >
      Extract
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "map"}'
          (click)='select("map")'
          >
      Map
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "validate"}'
          (click)='select("validate")'
          >
      Validate
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "publish"}'
          (click)='select("publish")'
          >
      Publish
    </span>
  `,
  styles: [
  ]
})
export class StepTabsComponent implements OnInit {

  @Input() selected: string;
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(selected) {
    this.change.emit(selected);
  }

}
