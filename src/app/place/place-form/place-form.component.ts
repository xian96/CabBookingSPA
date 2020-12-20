import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/core/services/place.service';
import { Place } from 'src/app/shared/models/place';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {

  placeId: number;
  place: Place;
  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      p => {
        this.placeId = + p.get('id');
        // make a call to movie service to get moe details;
        this.placeService.getPlaceById(this.placeId)
        .subscribe((response) => {
          this.place = response;
        });
      }
    );
  }

  update(){
    this.placeService.updatePlace(this.place).subscribe(
      (response) => {
      },
      (err: any) => {
      }
    );
  }

}
