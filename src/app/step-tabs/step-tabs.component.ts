import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-tabs',
  template: `
    <span class='tab'
          [ngClass]='{active: selected === "extract", valid: validation["extract"]}'
          (click)='select("extract")'
          >
      Extract
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "map", valid: validation["map"]}'
          (click)='select("map")'
          >
      Map
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "enrich", valid: validation["enrich"]}'
          (click)='select("enrich")'
          >
      Enrich
    </span>
    <span class='tab'
          [ngClass]='{active: selected === "publish", valid: validation["publish"]}'
          (click)='select("publish")'
          >
      Publish
    </span>
  `,
  styles: [
`:host {
  flex: 0 0 auto;
  display: flex;
  flex-flow: row;
  border-bottom: 1px solid #eee;
  padding: 10px;
  box-shadow: 0px 5px 10px 0px #ccc;
}

.tab {
  margin: 10px;
  border: 1px solid #444;
  display: block;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #ccc;
  cursor: pointer;
  height: 25px;
}

.tab.active {
  box-shadow: 0px 0px 5px 0px #ccc;
  border-width: 3px;
  padding: 3px 8px;
}

.tab.valid {
  background-color: #66e866;
}

`
  ]
})
export class StepTabsComponent implements OnInit {

  @Input() selected: string;
  @Input() validation: any = {};
  @Output() change = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(selected) {
    this.selected = selected;
    this.change.emit(selected);
  }

}
