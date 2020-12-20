import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { BookingHistory } from 'src/app/shared/models/bookingHistory';

@Injectable({
  providedIn: 'root'
})
export class BookingHistoryService {

  constructor(private apiService: ApiService) { }

  getAllBookingHistory(): Observable<BookingHistory[]>{
    return  this.apiService.getAll('BookingHistory');
  }
}
