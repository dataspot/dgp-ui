import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-enrich',
  template: `
    <p>
      step-enrich works!
    </p>
  `,
  styles: [
    `
        :host {
          padding: 10px;
        }
    `
      ]
})
export class StepEnrichComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
