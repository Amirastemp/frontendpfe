import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobpostComponent } from './addjobpost.component';

describe('AddjobpostComponent', () => {
  let component: AddjobpostComponent;
  let fixture: ComponentFixture<AddjobpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjobpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
