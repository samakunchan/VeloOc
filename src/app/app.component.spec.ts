import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SliderComponent } from './pages/slider/slider.component';
import { MapComponent } from './pages/map/map.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CanvasComponent } from './pages/canvas/canvas.component';
import { CompteurComponent } from './pages/compteur/compteur.component';
import { FooterComponent } from './pages/footer/footer.component';
import { CarousselComponent } from './pages/slider/caroussel/caroussel.component';
import { FormulaireComponent } from './pages/reservation/formulaire/formulaire.component';
import { StepperComponent } from './pages/reservation/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule],
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
        FormulaireComponent,
        StepperComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'velooc'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('velooc');
  });
  it(`donne les infos des adresses'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.adressMalt).toEqual('https://www.malt.fr/profile/cedricbadjah?overview=true');
    expect(app.adressWebsite).toEqual('https://my-services.samakunchan.fr');
    expect(app.github).toEqual('https://github.com/samakunchan/velooc');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a strong').textContent).toContain('Velooc');
  });
});
