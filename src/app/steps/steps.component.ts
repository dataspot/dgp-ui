import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-steps',
  template: `
    <app-step-tabs [validation]='validation' [selected]='step' (change)='select($event)'></app-step-tabs>
    <app-step-extract *ngIf="step=='extract'"></app-step-extract>
    <app-step-mapping *ngIf="step=='map'"></app-step-mapping>
    <app-step-enrich *ngIf="step=='enrich'"></app-step-enrich>
    <app-step-publish *ngIf="step=='publish'"></app-step-publish>
  `,
  styles: [
    `
:host {
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
  overflow-y: scroll;
}
    `
  ]
})
export class StepsComponent implements OnInit {

  @Input() step: string;
  @Input() validation: any;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(chosen: string) {
    this.step = chosen;
    this.selected.emit(chosen);
  }

}
