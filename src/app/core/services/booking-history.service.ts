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

  getBookingHistoryById(id: number): Observable<any>{
    return this.apiService.getOne('BookingHistory', id);
  }

  updateBookingHistory(bookingHistory: BookingHistory): Observable<BookingHistory>{
    return  this.apiService.update('Admin/BookingHistory', bookingHistory);
  }
  deleteBookingHistoryById(id: number): Observable<any>{
    return this.apiService.delete('Admin/BookingHistory', id);
  }
}
