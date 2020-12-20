import { Component, OnInit } from '@angular/core';
import { Booking } from '../shared/models/booking';
import { BookingService } from '../core/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBooking()
    .subscribe((response) => {
      this.bookings = response;
    });
  }
  
  update(id:number){
    console.log(id);
  }

  delete(id:number){
    console.log(id);
  }

}
