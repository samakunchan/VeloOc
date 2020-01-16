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
import { FooterComponent } from './pages/footer/footer.component';
import { CarousselComponent } from './pages/slider/caroussel/caroussel.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './pages/reservation/formulaire/formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './pages/reservation/stepper/stepper.component';
import { AboutComponent } from './pages/about/about.component';
import { CountdownComponent } from './pages/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    MapComponent,
    ReservationComponent,
    CanvasComponent,
    FooterComponent,
    CarousselComponent,
    FormulaireComponent,
    StepperComponent,
    AboutComponent,
    CountdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot(), HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
