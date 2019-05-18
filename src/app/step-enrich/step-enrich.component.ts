import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-enrich',
  template: `
    <p i18n>
      Loading taxonomy specific enrichments...
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
