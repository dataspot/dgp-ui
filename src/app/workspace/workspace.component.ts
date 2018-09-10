import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  template: `
    <app-steps></app-steps>
    <app-results></app-results>
  `,
  styles: [
    `
:host {
  display: flex;
  flex: 7;
  flex-flow: column;
  height: 100%;
}
    `
  ]
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
