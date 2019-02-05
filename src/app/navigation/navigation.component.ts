import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <app-logo></app-logo>
    <app-dataset-list></app-dataset-list>
    <app-footer></app-footer>
  `,
  styles: [
    `
:host {
  flex: 0 0 auto;
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 0 10px;
  background-color: #444;
  color: #fff;
}
    `
  ]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
