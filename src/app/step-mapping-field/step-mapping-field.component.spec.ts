import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMappingFieldComponent } from './step-mapping-field.component';

describe('StepMappingFieldComponent', () => {
  let component: StepMappingFieldComponent;
  let fixture: ComponentFixture<StepMappingFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepMappingFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepMappingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
