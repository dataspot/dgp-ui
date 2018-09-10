import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepExtractSourceComponent } from './step-extract-source.component';

describe('StepExtractSourceComponent', () => {
  let component: StepExtractSourceComponent;
  let fixture: ComponentFixture<StepExtractSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepExtractSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepExtractSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
