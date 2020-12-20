import { Component, OnInit } from '@angular/core';
import { Place } from '../shared/models/place';
import { PlaceService } from '../core/services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  places: Place[];
  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getAllPlace()
    .subscribe((response) => {
      this.places = response;
    });
  }

  update(id:number){
    console.log(id);
  }

  delete(id:number){
    console.log(id);
  }
}
