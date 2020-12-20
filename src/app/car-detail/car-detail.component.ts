import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../core/services/car.service';
import { CarDetail } from '../shared/models/carDetail';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carId: number;
  carDetail: CarDetail;
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        this.carId = + p.get('id');
        console.log(`the is: ${this.carId}`);
        this.carService.getCarById(this.carId).subscribe(
          c => {
            this.carDetail = c;
            console.log(c);
          }
        );
      }
    );
  }

  update(id:number){
    console.log(id);
  }

  delete(id:number){
    console.log(id);
  }

}
