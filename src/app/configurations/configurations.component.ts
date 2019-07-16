import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.less']
})
export class ConfigurationsComponent implements OnInit {

  constructor(public api: ApiService, public store: StoreService) { }

  ngOnInit() {
    this.api.refreshConfigurations();
  }

  fileChanged(event) {
    console.log(event);
    const file = event.target.files[0];
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      let content = e.target['result'];
      content = JSON.parse(content);
      this.store.setConfig(content);
    };
    fileReader.readAsText(file);
  }
}
