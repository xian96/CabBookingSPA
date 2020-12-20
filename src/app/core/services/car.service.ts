import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private apiService: ApiService) { }

  getAllCar(): Observable<Car[]>{
    return  this.apiService.getAll('CabType');
  }

  getCarById(id: number): Observable<any>{
    return this.apiService.getOne('CabType', id);
  }

}
