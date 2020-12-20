import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PlaceComponent } from './place/place.component';
import { BookingComponent } from './booking/booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CarFormComponent } from './car-detail/car-form/car-form.component';
import { PlaceFormComponent } from './place/place-form/place-form.component';
import { BookingFormComponent } from './booking/booking-form/booking-form.component';
import { BookingHistoryFormComponent } from './booking-history/booking-history-form/booking-history-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'car/:id',
    component: CarDetailComponent,
  },
  {
    path: 'carForm/:id',
    component: CarFormComponent,
  },
  {
    path: 'place',
    component: PlaceComponent,
  },
  {
    path: 'placeForm/:id',
    component: PlaceFormComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'bookingForm/:id',
    component: BookingFormComponent,
  },
  {
    path: 'bookingHistory',
    component: BookingHistoryComponent,
  },
  {
    path: 'bookingHistoryForm/:id',
    component: BookingHistoryFormComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
