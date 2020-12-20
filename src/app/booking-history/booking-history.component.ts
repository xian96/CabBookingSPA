import { Component, OnInit } from '@angular/core';
import { BookingHistory } from '../shared/models/bookingHistory';
import { BookingHistoryService } from '../core/services/booking-history.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookingHistories: BookingHistory[];
  constructor(private bookingHistorService: BookingHistoryService) { }

  ngOnInit(): void {
    this.bookingHistorService.getAllBookingHistory()
    .subscribe((response) => {
      this.bookingHistories = response;
    });
  }

  delete(id:number){
    console.log(id);
    this.bookingHistorService.deleteCarById(id).subscribe(
      (response) => {
        console.log(response);
      },
      (err: any) => {
        console.log(err);
        alert(`fail`);
      }
    );
  }

}
