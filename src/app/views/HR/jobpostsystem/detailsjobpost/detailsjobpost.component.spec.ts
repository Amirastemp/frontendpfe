import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsjobpostComponent } from './detailsjobpost.component';

describe('DetailsjobpostComponent', () => {
  let component: DetailsjobpostComponent;
  let fixture: ComponentFixture<DetailsjobpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsjobpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsjobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
