import { Component, OnInit } from '@angular/core';

import { StoreService } from '../store.service';

@Component({
  selector: 'app-step-extract',
  template: `
    <app-step-extract-source [source]='config.source'
                             *ngIf='config.source'
                             (change)='store.setConfig(config)'>
    </app-step-extract-source>
    <app-step-extract-structure [structure]='config.structure'
                                *ngIf='config.structure'
                                (change)='store.setConfig(config)'>
    </app-step-extract-structure>
  `,
  styles: []
})
export class StepExtractComponent implements OnInit {

  private config: any = null;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getConfig().subscribe(config => this.config = config);
  }

}
