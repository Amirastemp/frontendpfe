import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJobpostingComponent } from './details-jobposting.component';

describe('DetailsJobpostingComponent', () => {
  let component: DetailsJobpostingComponent;
  let fixture: ComponentFixture<DetailsJobpostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsJobpostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsJobpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
