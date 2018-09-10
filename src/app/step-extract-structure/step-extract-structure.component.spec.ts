import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepExtractStructureComponent } from './step-extract-structure.component';

describe('StepExtractStructureComponent', () => {
  let component: StepExtractStructureComponent;
  let fixture: ComponentFixture<StepExtractStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepExtractStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepExtractStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
