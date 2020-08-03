import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproveedorComponent } from './addproveedor.component';

describe('AddproveedorComponent', () => {
  let component: AddproveedorComponent;
  let fixture: ComponentFixture<AddproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
