import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PlaceComponent } from './place/place.component';
import { BookingComponent } from './booking/booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

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
    path: 'place',
    component: PlaceComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'bookingHistory',
    component: BookingHistoryComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
