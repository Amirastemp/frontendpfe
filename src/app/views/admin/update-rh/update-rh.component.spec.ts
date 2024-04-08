import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRHComponent } from './update-rh.component';

describe('UpdateRHComponent', () => {
  let component: UpdateRHComponent;
  let fixture: ComponentFixture<UpdateRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
