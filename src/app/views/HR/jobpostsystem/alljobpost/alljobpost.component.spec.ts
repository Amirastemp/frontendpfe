import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljobpostComponent } from './alljobpost.component';

describe('AlljobpostComponent', () => {
  let component: AlljobpostComponent;
  let fixture: ComponentFixture<AlljobpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlljobpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlljobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
