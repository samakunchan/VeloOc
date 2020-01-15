import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MapService } from '../../core/services/map.service';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  forFeaturedLayerOpen: any[] = [];
  forFeaturedLayerClose: any[] = [];
  feature;
  @Output() menuState = new EventEmitter<string>();
  @Output() sessionStorageMap$ = new EventEmitter<any>();
  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.startMap();
  }
  startMap() {
    this.mapService
      .startMapGLToId('map')
      .then((map: any) => {
        map.on('load', () => {
          this.startAllMarker(map);
        });
      })
      .catch(error => console.error(error));
  }
  startAllMarker(map) {
    this.mapService.getDataLyon().subscribe((marker: any) => {
      this.hydrateFeatures(marker);
      this.loadOpenedStand(map);
      this.loadClosedStand(map);
      this.onMarkerClick(map);
    });
  }
  hydrateFeatures(marker) {
    marker.values.forEach((data, index) => {
      if (data.status === 'OPEN') {
        this.forFeaturedLayerOpen.push({
          type: 'Feature',
          properties: {
            id: index,
            // tslint:disable-next-line:max-line-length
            description: `<h3 class="text-center">${data.name}</h3><p class="text-center">Vélo disponible: ${data.available_bikes}</p><h4 class="text-center text-success">OUVERT</h4>`,
            icon: 'marker',
            address: data.address,
            address2: data.address2,
            availability: data.availability,
            available_bike_stands: data.available_bike_stands,
            available_bikes: data.available_bikes,
            bike_stands: data.bike_stands,
            commune: data.commune,
            name: data.name,
            number: data.number,
            status: data.status,
          },
          geometry: {
            type: 'Point',
            coordinates: [data.lng, data.lat],
          },
        });
      } else if (data.status === 'CLOSED') {
        this.forFeaturedLayerClose.push({
          type: 'Feature',
          properties: {
            id: index,
            description: `<h3>${data.name}</h3><p>${data.available_bikes}</p><h4>${data.status}</h4>`,
            icon: 'marker',
          },
          geometry: {
            type: 'Point',
            coordinates: [data.lng, data.lat],
          },
        });
      }
    });
  }
  loadOpenedStand(map) {
    map.loadImage('assets/img/pin-blue.png', (error, image) => {
      if (error) {
        throw error;
      }
      map.addLayer({
        id: 'places',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [...this.forFeaturedLayerOpen],
          },
        },
        layout: {
          'icon-image': 'marqueurVelo',
          'icon-size': 1,
        },
      });
      map.addImage('marqueurVelo', image);
    });
  }
  loadClosedStand(map) {
    map.loadImage('assets/img/pin-red.png', (error, image) => {
      if (error) {
        throw error;
      }
      map.addLayer({
        id: 'places1',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [...this.forFeaturedLayerClose],
          },
        },
        layout: {
          'icon-image': 'marqueurVeloRouge',
          'icon-size': 1,
        },
      });
      map.addImage('marqueurVeloRouge', image);
    });
  }
  onMarkerClick(map) {
    map.on('click', 'places', event => {
      document.getElementById('toContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.feature = event.features[0];
      map.flyTo({ center: event.features[0].geometry.coordinates });
      const button = '<button id="choisir' + event.features[0].properties.id + '" class="btn btn-primary">Choisir</button>';
      const coordinates = this.feature.geometry.coordinates.slice();
      const description = this.feature.properties.description + button;
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
      document.getElementById('choisir' + event.features[0].properties.id).addEventListener('click', () => {
        this.mapService
          .setAppInfos(this.feature.properties)
          .then(() => {
            this.menuState.emit('in');
            this.sessionStorageMap$.emit(this.mapService.getAppInfos());
          })
          .catch(error => console.error(error));
      });
    });
  }
}
