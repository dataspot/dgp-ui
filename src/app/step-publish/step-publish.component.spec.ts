import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPublishComponent } from './step-publish.component';

describe('StepPublishComponent', () => {
  let component: StepPublishComponent;
  let fixture: ComponentFixture<StepPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
