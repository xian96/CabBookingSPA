import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryFormComponent } from './booking-history-form.component';

describe('BookingHistoryFormComponent', () => {
  let component: BookingHistoryFormComponent;
  let fixture: ComponentFixture<BookingHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingHistoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
