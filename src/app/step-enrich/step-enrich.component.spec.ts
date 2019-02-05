import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEnrichComponent } from './step-enrich.component';

describe('StepEnrichComponent', () => {
  let component: StepEnrichComponent;
  let fixture: ComponentFixture<StepEnrichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepEnrichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEnrichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
