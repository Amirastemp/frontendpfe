import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRhComponent } from './auth-rh.component';

describe('AuthRhComponent', () => {
  let component: AuthRhComponent;
  let fixture: ComponentFixture<AuthRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
