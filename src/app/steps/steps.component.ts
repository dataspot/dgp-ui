import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  template: `
    <app-step-tabs [selected]='selected' (change)='step = $event'></app-step-tabs>
    <app-step-extract *ngIf="step=='extract'"></app-step-extract>
    <app-step-mapping *ngIf="step=='map'"></app-step-mapping>
    <app-step-validate *ngIf="step=='validate'"></app-step-validate>
    <app-step-publish *ngIf="step=='publish'"></app-step-publish>
  `,
  styles: [
    `
:host {
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
}
    `
  ]
})
export class StepsComponent implements OnInit {

  private step = 'extract';

  constructor() { }

  ngOnInit() {
  }

}
