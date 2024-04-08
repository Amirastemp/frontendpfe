import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHLayoutComponent } from './rh-layout.component';

describe('RHLayoutComponent', () => {
  let component: RHLayoutComponent;
  let fixture: ComponentFixture<RHLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RHLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
