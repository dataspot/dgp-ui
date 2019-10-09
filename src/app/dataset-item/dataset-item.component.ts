import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../store.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dataset-item',
  templateUrl: './dataset-item.component.html',
  styleUrls: ['./dataset-item.component.less']
})
export class DatasetItemComponent implements OnInit {

  @Input() config: any;

  constructor(public store: StoreService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  jsonDownload() {
    return this.sanitizer.bypassSecurityTrustUrl(
      'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.config.config))
    );
  }
}
