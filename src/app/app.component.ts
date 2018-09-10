import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <app-workspace></app-workspace>
  `,
  styles: [
    `
::ng-deep body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}

:host {
  display: flex;
  flex-flow: row;
  width: 100vw;
  height: 100vh;
}
    `
  ]
})
export class AppComponent {
  title = 'kuvira';

  constructor(private api: ApiService) {}
}
