import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-extendable-keyvalue-list',
  template: `
    <div>
      <span class='item' *ngFor='let value of values'>
        <input type='text'
          [(ngModel)]='value[0]'
          (change)='changed()'
        />
        <span> = </span>
        <input type='text'
          [(ngModel)]='value[1]'
          (change)='changed()'
        />
        <a href='#' *ngIf='value[0]' (click)='value[0]=""; changed()'><i class="fas fa-trash"></i></a>
      </span>
    </div>
  `,
  styles: [
    `
div {
  display: flex;
  flex-flow: column;
  padding: 5px 10px;
}

.item {
  display: flex;
  flex-flow: row;
}
    `
  ]
})
export class ExtendableKeyvalueListComponent implements OnInit {

  @Input() data;
  @Output() update = new EventEmitter<any>();

  values = [];

  constructor() { }

  ngOnInit() {
    this.values = Object.entries(this.data);
    this.values.push(['', '']);
  }

  changed() {
    console.log(this.values);
    const x = [];
    const ret = {};
    for (const v of this.values) {
      if (v[0]) {
        x.push(v);
        ret[v[0]] = v[1];
      }
    }
    x.push(['', '']);
    this.values = x;
    console.log(ret);
    this.update.emit(ret);
  }
}
