import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


function compare(obj1, obj2, prefix) {
  if (!prefix) {
    prefix = '';
  }

  try {
    // Loop through properties in object 1
    for (const p of Object.keys(obj1)) {
      // Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) { return false; }

      switch (typeof (obj1[p])) {
        // Deep compare objects
        case 'object':
          if (obj1[p]) {
            if (!compare(obj1[p], obj2[p], prefix + p + '.')) { return false; }
          } else {
            if (obj2[p]) {
              return false;
            }
          }
          break;
        // Compare values
        default:
          if (obj1[p] !== obj2[p]) {
            console.log('mismatch', prefix + p);
            return false;
          }
      }
    }

    // Check object 2 for any extra properties
    for (const p in obj2) {
      if (typeof (obj1[p]) === 'undefined') { return false; }
    }
  } catch (e) {
    console.log('error in', prefix, e);
  }
  return true;
}



@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _config = new BehaviorSubject<any>({
    source: {
      // path: 'http://localhost:5000/test.xls'
      path: 'https://demo.ckan.org/dataset/7b169dc1-133b-4c3a-8306-5775bf2182bc/resource/cfca766a-0fc7-4f73-bd84-981b651a3606/download/boost-moldova-2014.csv',
    },
    constants: {}, model: {},
  });
  private currentConfig = JSON.parse(JSON.stringify(this._config.getValue()));
  private _rows = new Subject<any>();
  private _errors = new BehaviorSubject<any>([]);

  constructor() { }

  getConfig(): BehaviorSubject<any> {
    return this._config;
  }

  getRows(): Subject<any> {
    return this._rows;
  }

  getErrors(): BehaviorSubject<any> {
    return this._errors;
  }

  setConfig(newConfig: any) {
    if (!compare(this.currentConfig, newConfig, null)) {
      console.log('setting new configuration', newConfig);
      this.currentConfig = JSON.parse(JSON.stringify(newConfig));
      this._config.next(newConfig);
    }
  }

  setErrors(newErrors: any) {
    console.log(newErrors);
    this._errors.next(newErrors);
  }

  addRow(row: any) {
    this._rows.next(row);
  }
}
