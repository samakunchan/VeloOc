import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './pages/header/header.component';
import { SliderComponent } from './pages/slider/slider.component';
import { MapComponent } from './pages/map/map.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CanvasComponent } from './pages/canvas/canvas.component';
import { CompteurComponent } from './pages/compteur/compteur.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CarousselComponent } from './pages/slider/caroussel/caroussel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MapComponent,
    ReservationComponent,
    CanvasComponent,
    CompteurComponent,
    FooterComponent,
    CarousselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
