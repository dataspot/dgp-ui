import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTabsComponent } from './step-tabs.component';

describe('StepTabsComponent', () => {
  let component: StepTabsComponent;
  let fixture: ComponentFixture<StepTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
