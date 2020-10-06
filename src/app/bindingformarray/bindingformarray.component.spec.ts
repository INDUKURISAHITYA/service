import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingformarrayComponent } from './bindingformarray.component';

describe('BindingformarrayComponent', () => {
  let component: BindingformarrayComponent;
  let fixture: ComponentFixture<BindingformarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingformarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingformarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
