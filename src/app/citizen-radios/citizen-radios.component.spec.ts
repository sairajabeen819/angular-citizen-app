import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenRadiosComponent } from './citizen-radios.component';

describe('CitizenRadiosComponent', () => {
  let component: CitizenRadiosComponent;
  let fixture: ComponentFixture<CitizenRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenRadiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
