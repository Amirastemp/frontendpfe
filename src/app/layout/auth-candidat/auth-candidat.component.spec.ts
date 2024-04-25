import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCandidatComponent } from './auth-candidat.component';

describe('AuthCandidatComponent', () => {
  let component: AuthCandidatComponent;
  let fixture: ComponentFixture<AuthCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCandidatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
