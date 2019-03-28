import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    'app.component.less'
  ]
})
export class AppComponent {
  title = 'kuvira';

  constructor(private api: ApiService, public store: StoreService) {}
}
