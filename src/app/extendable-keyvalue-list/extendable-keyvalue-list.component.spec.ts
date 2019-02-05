import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendableKeyvalueListComponent } from './extendable-keyvalue-list.component';

describe('ExtendableKeyvalueListComponent', () => {
  let component: ExtendableKeyvalueListComponent;
  let fixture: ComponentFixture<ExtendableKeyvalueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendableKeyvalueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendableKeyvalueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
