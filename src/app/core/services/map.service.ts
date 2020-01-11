import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  map;
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://download.data.grandlyon.com/ws/rdata/jcd_jcdecaux.jcdvelov/all.json?maxfeatures=200&start=1';
  }
  startMapGLToId(id: string) {
    return new Promise((resolve, reject) => {
      mapboxgl.accessToken = environment.mapBoxKeyAccessToken;
      this.map = new mapboxgl.Map({
        container: id, // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [4.865141536736715, 45.732218010659686],
        zoom: 12,
        attributionControl: false,
      });
      // Ces lignes ci dessous sont important afin de réinitialiser la map. Mabpox a un height de 300px par défaut
      document.getElementById('map').style.height = '600px';
      this.map.resize();
      if (this.map) {
        resolve(this.map);
      } else {
        reject('Un problème est survenu lors du chargement de la map, vérifier si la documentation si il y a une mise à jour à faire');
      }
    });
  }
  setAppInfos(prop) {
    return new Promise((resolve, reject) => {
      sessionStorage.setItem('station', prop.name);
      sessionStorage.setItem('address', prop.address);
      sessionStorage.setItem('address2', prop.address2);
      sessionStorage.setItem('commune', prop.commune);
      sessionStorage.setItem('availableBikes', prop.available_bikes);
      sessionStorage.setItem('status', prop.status);
      sessionStorage.setItem('availability', prop.availability);
      resolve({
        name: prop.name,
        address: prop.address,
        address2: prop.address2,
        commune: prop.commune,
      });
      if (prop === undefined) {
        reject(false);
      }
    });
  }
  getDataLyon() {
    return new Observable(observer => {
      this.http.get(this.apiUrl).subscribe(res => {
        if (res) {
          observer.next(res);
        } else {
          observer.next({ message: 'Les données ne sont pas disponible' });
        }
      });
    });
  }
}
