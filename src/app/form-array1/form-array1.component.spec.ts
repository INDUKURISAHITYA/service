import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArray1Component } from './form-array1.component';

describe('FormArray1Component', () => {
  let component: FormArray1Component;
  let fixture: ComponentFixture<FormArray1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArray1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArray1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
