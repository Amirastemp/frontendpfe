import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailsComponent } from './rhdetails.component';

describe('RhdetailsComponent', () => {
  let component: RhdetailsComponent;
  let fixture: ComponentFixture<RhdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
