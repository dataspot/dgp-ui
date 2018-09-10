import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-result-table',
  template: `
    <p>{{ kind }}</p>
    <pre *ngFor='let row of rows'>{{row}}</pre>
  `,
  styles: []
})
export class ResultTableComponent implements OnInit {

  @Input() kind: number;

  private rows = [];

  constructor(private store: StoreService) {
    this.store.getRows()
        .subscribe((row) => {
          if (this.kind === row.kind) {
            if (row.index === 0) {
              this.rows = [];
            }
            this.rows.push(JSON.stringify(row));
          }
        });
  }

  ngOnInit() {
  }

}
