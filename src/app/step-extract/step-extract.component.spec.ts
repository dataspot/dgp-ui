import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepExtractComponent } from './step-extract.component';

describe('StepExtractComponent', () => {
  let component: StepExtractComponent;
  let fixture: ComponentFixture<StepExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
