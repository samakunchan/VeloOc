import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  map;

  constructor() {  }
  startMapGLToId(id: string) {
    mapboxgl.accessToken = environment.mapBoxKeyAccessToken;
    this.map = new mapboxgl.Map({
      container: id, // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [3.8728, 43.624],
      zoom: 13,
      attributionControl: false,
    });
    // Ces lignes ci dessous sont important afin de réinitialiser la map. Mabpox a un height de 300pc par défaut
    // const marker = new mapboxgl.Marker().setLngLat([3.8733574000000317, 43.625877]).addTo(this.map);
    document.getElementById('map').style.height = '600px';
    this.map.resize();
  }
  addMarker() {
    const geojson = [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [3.8736, 43.6059]
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [3.8833, 43.6051]
        }
      }];
    new mapboxgl.Marker().setLngLat([3.8728, 43.624]).addTo(this.map);
    new mapboxgl.Marker().setLngLat([3.8833, 43.6051]).addTo(this.map);
    new mapboxgl.Marker()
      .setLngLat([3.8728, 43.624])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>MapBox</h3><p>Bonjour</p>'))
      .addTo(this.map);
  }
}
