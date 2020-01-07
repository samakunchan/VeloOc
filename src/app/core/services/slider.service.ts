import { Injectable } from '@angular/core';
import { Caroussel } from '../model/caroussel.model';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  caroussel: Caroussel[];
  constructor() {
    this.caroussel = [
      {
        id: 0,
        alt: 'Image explicative n° 1',
        url: 'assets/img/slides/velo1.jpg',
        header: 'Application Velooc',
        subheader: 'Reservation de vélo',
        paragraph:
          'Abandonnez votre voiture et ballader vous à vélo.',
        link: 'Commencer la réservation',
      },
      {
        id: 1,
        alt: 'Image explicative n° 2',
        url: 'assets/img/slides/velo2.jpg',
        header: 'Application Velooc',
        subheader: 'Arretez de polluer comme des porcs',
        paragraph: 'Sélectionnez sur la map la station de vélo afin de réserver.',
        link: '',
      },
      {
        id: 2,
        alt: 'Image explicative n° 3',
        url: 'assets/img/slides/velo3.jpg',
        header: 'Application Velooc',
        subheader: 'Retrouver un certain art de vivre',
        paragraph: 'Renseignez vos informations, puis signez. Votre vélo vous attends pendant 20 min.',
        link: '',
      },
    ];
  }
}
