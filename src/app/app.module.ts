import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { PlaceComponent } from './place/place.component';
import { BookingComponent } from './booking/booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { PlaceFormComponent } from './place/place-form/place-form.component';
import { CarFormComponent } from './car-detail/car-form/car-form.component';
import { BookingHistoryFormComponent } from './booking-history/booking-history-form/booking-history-form.component';
import { BookingFormComponent } from './booking/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarDetailComponent,
    PlaceComponent,
    BookingComponent,
    BookingHistoryComponent,
    PlaceFormComponent,
    CarFormComponent,
    BookingHistoryFormComponent,
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
