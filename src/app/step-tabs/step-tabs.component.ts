import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-tabs',
  templateUrl: 'step-tabs.component.html',
  styleUrls: ['step-tabs.component.less']
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
