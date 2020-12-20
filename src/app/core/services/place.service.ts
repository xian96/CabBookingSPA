import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Place } from 'src/app/shared/models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private apiService: ApiService) { }

  getAllPlace(): Observable<Place[]>{
    return  this.apiService.getAll('Place');
  }

  getPlaceById(id: number): Observable<Place>{
    return  this.apiService.getOne('Place', id);
  }

  updatePlace(place: Place): Observable<Place>{
    return  this.apiService.update('Admin/Place', place);
  }

  deletePlaceById(id: number): Observable<any>{
    return this.apiService.delete('Admin/Place', id);
  }
}
