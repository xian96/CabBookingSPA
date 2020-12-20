import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private apiService: ApiService) { }

  getAllBooking(): Observable<Booking[]>{
    return  this.apiService.getAll('Booking');
  }
  getBookingById(id: number): Observable<any>{
    return this.apiService.getOne('Booking', id);
  }

  updateBooking(car: Booking): Observable<Booking>{
    return  this.apiService.update('Admin/Booking', car);
  }
  deleteBookingById(id: number): Observable<any>{
    return this.apiService.delete('Admin/Booking', id);
  }
}
