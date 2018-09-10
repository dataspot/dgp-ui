import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMappingComponent } from './step-mapping.component';

describe('StepMappingComponent', () => {
  let component: StepMappingComponent;
  let fixture: ComponentFixture<StepMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
