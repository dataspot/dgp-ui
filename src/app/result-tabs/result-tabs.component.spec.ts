import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTabsComponent } from './result-tabs.component';

describe('ResultTabsComponent', () => {
  let component: ResultTabsComponent;
  let fixture: ComponentFixture<ResultTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
