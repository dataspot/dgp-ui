import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img src='assets/img/logo.png' width='100px'/>
  `,
  styles: [`
  :host {
    margin: 5px;
  }  
`]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
