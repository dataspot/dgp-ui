import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    &copy; 2019
  `,
  styles: [
    `
:host {
  margin-top: auto;
}
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
