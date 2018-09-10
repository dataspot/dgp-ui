import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  template: `
    <app-result-tabs [selected]='selected' (change)='selected = $event'></app-result-tabs>
    <app-result-table [kind]='0' [hidden]='selected!=="original"'></app-result-table>
    <app-result-table [kind]='1' [hidden]='selected!=="transformed"'></app-result-table>
  `,
  styles: [
    `
:host {
  flex: 1;
  padding: 10px;
  overflow-y: scroll;
}
    `
  ]
})
export class ResultsComponent implements OnInit {

  private selected = 'original';  // selected tab

  constructor() { }

  ngOnInit() {
  }

}
