import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-result-table',
  template: `
  <table>
    <thead>
      <th *ngFor='let hdr of headers'>{{hdr}}</th>
    </thead>
    <tbody>
      <ng-container *ngFor='let row of rows'>
        <tr [class.errd]='row.errd'>
          <td *ngFor='let val of row.data' [innerHtml]='val'>
          </td>
        </tr>
      </ng-container>
    </tbody>
  </table>
  `,
  styles: [
`
    table {
      border-collapse: collapse;
      border: 1px solid #444;
    }

    ::ng-deep .number {
      text-align: right;
      width: 100%;
      display: inline-block;
    }

    th {
      font-weight: bold;
      background-color: #ccc;
      text-align: start;
    }

    tr:nth-child(2n+1) {
      background-color: #eee;
    }

    tr.errd td {
      background-color: salmon;
    }

    td, th {
      padding: 1px 6px;
    }

    td {
      white-space: nowrap;
    }
`
  ]
})
export class ResultTableComponent implements OnInit {

  @Input() kind: number;
  @Output() validate = new EventEmitter<boolean>();

  rows = [];
  headers = [];

  constructor(private store: StoreService) {
    this.store.getRows()
        .subscribe((row) => {
          if (this.kind === row.kind) {
            if (row.index === -1) {
              this.rows = [];
              this.headers = row.data;
              this.headers.unshift('#');
              setTimeout(() => {
                this.validate.emit(false);
              }, 0);
            } else {
              if (this.rows.length === 0) {
                setTimeout(() => {
                  this.validate.emit(true);
                }, 0);
              } else {
                if (this.rows[this.rows.length - 1].data[0] + 1 !== row.index ) {
                  this.rows.push({data: this.headers.map((h) => '&hellip;')});
                }
              }
              const mapped: any = this.headers.map((h) => this.strize(row.data[h]));
              mapped[0] = row.index;
              this.rows.push({
                data: mapped,
                errd: row.errors && row.errors.length > 0
              });
            }
          }
        });
  }

  strize(v) {
    if (v !== null && v !== undefined) {
      if (v.hasOwnProperty('type{decimal}')) {
        return `<span class='number'>${parseFloat(v['type{decimal}']).toFixed(2)}</span>`;
      }
    }
    return '' + v;
  }

  ngOnInit() {
  }

}
