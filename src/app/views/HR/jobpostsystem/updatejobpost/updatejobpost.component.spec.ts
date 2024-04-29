import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejobpostComponent } from './updatejobpost.component';

describe('UpdatejobpostComponent', () => {
  let component: UpdatejobpostComponent;
  let fixture: ComponentFixture<UpdatejobpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatejobpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatejobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
