import { Component, OnInit } from '@angular/core';
import { BookingHistory } from 'src/app/shared/models/bookingHistory';
import { ActivatedRoute } from '@angular/router';
import { BookingHistoryService } from 'src/app/core/services/booking-history.service';

@Component({
  selector: 'app-booking-history-form',
  templateUrl: './booking-history-form.component.html',
  styleUrls: ['./booking-history-form.component.css']
})
export class BookingHistoryFormComponent implements OnInit {

  bookingHistoryId: number;
  bookingHistory: BookingHistory;
  constructor(private route: ActivatedRoute, private bookingHistoryService: BookingHistoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        this.bookingHistoryId = + p.get('id');
        // make a call to movie service to get moe details;
        this.bookingHistoryService.getBookingHistoryById(this.bookingHistoryId)
        .subscribe((response) => {
          this.bookingHistory = response;
        });
      }
    );

  }

  update(){
    this.bookingHistoryService.updateBookingHistory(this.bookingHistory).subscribe(
      (response) => {
      },
      (err: any) => {
      }
    );
  }

}
