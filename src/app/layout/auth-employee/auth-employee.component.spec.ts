import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEmployeeComponent } from './auth-employee.component';

describe('AuthEmployeeComponent', () => {
  let component: AuthEmployeeComponent;
  let fixture: ComponentFixture<AuthEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
