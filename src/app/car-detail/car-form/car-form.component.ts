import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/models/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carId: number;
  car: Car;
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        this.carId = + p.get('id');
        // make a call to movie service to get moe details;
        this.carService.getCarById(this.carId)
        .subscribe((response) => {
          this.car = response;
        });
      }
    );
  }
  
  update(){
    this.carService.updateCar(this.car).subscribe(
      (response) => {
      },
      (err: any) => {
      }
    );
  }

}
