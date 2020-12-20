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

  delete(id:number){
    console.log(id);
    this.placeService.deleteCarById(id).subscribe(
      (response) => {
        console.log(response);
      },
      (err: any) => {
        console.log(err);
        alert(`can not do this! the reason is :---> Microsoft.Data.SqlClient.SqlException (0x80131904): The DELETE statement conflicted with the REFERENCE constraint "FK_Booking_Place_FromPlaceId". The conflict occurred in database "JasonXing_CabBookingDb", table "dbo.Booking", column 'FromPlaceId'.`);
      }
    );
  }
}
