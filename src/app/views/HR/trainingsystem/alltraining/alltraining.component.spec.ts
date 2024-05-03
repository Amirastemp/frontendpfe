import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltrainingComponent } from './alltraining.component';

describe('AlltrainingComponent', () => {
  let component: AlltrainingComponent;
  let fixture: ComponentFixture<AlltrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlltrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
