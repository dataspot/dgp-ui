import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.less'
  ]
})
export class AppComponent implements OnInit {
  rtl = false;

  constructor(private api: ApiService, public store: StoreService,
              @Inject(LOCALE_ID) public locale: string ) {
    this.rtl = locale === 'he' || locale === 'ar';
  }

  ngOnInit(): void {
    if (this.rtl) {
      document.body.classList.add('rtl');
    }
  }
}
