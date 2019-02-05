import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  template: `
    <app-steps [step]='step' [validation]='validation' (selected)='step=$event'></app-steps>
    <app-results [step]='step' (validate)='validation[$event.kind] = $event.valid'></app-results>
  `,
  styles: [
    `
:host {
  display: flex;
  flex: 1 1 auto;
  overflow-x: hidden;
  flex-flow: column;
  height: 100%;
}
    `
  ]
})
export class WorkspaceComponent implements OnInit {

  step = 'extract';
  validation = {};

  constructor() { }

  ngOnInit() {
  }

}
