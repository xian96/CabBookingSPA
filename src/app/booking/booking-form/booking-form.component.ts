import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { Booking } from 'src/app/shared/models/booking';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  bookingId: number;
  booking: Booking;
  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        this.bookingId = + p.get('id');
        // make a call to movie service to get moe details;
        this.bookingService.getBookingById(this.bookingId)
        .subscribe((response) => {
          this.booking = response;
        });
      }
    );

  }

  update(){
    this.bookingService.updateBooking(this.booking).subscribe(
      (response) => {
      },
      (err: any) => {
      }
    );
  }
}
