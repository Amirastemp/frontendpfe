import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrhComponent } from './addrh.component';

describe('AddrhComponent', () => {
  let component: AddrhComponent;
  let fixture: ComponentFixture<AddrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
