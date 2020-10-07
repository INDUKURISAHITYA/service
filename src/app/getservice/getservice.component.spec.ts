import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetserviceComponent } from './getservice.component';

describe('GetserviceComponent', () => {
  let component: GetserviceComponent;
  let fixture: ComponentFixture<GetserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
