import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/models/car';
import { CarService } from '../core/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cars: Car[];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCar()
    .subscribe((response) => {
      this.cars = response;
    });
    console.log(`the cars is here : ${this.cars}`);
  }

}
