import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _config = new BehaviorSubject<any>({
    source: {
      path: 'http://localhost:5000/test.xls'
    },
    constants: {}, model: {},
  });
  private _rows = new Subject<any>();

  constructor() { }

  getConfig(): BehaviorSubject<any> {
    return this._config;
  }

  getRows(): Subject<any> {
    return this._rows;
  }

  setConfig(newConfig: any) {
    console.log(newConfig);
    this._config.next(newConfig);
  }

  addRow(row: any) {
    this._rows.next(row);
  }
}
