import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-dataset-item',
  templateUrl: './dataset-item.component.html',
  styleUrls: ['./dataset-item.component.less']
})
export class DatasetItemComponent implements OnInit {

  @Input() config: any;

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

}
