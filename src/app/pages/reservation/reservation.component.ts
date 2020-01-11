import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  @Output() menuState = new EventEmitter<string>();
  station;
  address;
  address2;
  commune;
  availableBikes;
  status;
  availability;
  constructor() {}
  ngOnInit() {
    this.station = sessionStorage.getItem('station');
    this.address = sessionStorage.getItem('address');
    this.address2 = sessionStorage.getItem('address2');
    this.availableBikes = sessionStorage.getItem('availableBikes');
    this.status = sessionStorage.getItem('status');
    this.availability = sessionStorage.getItem('availability');
    this.commune = sessionStorage.getItem('commune');
  }
  onCloseSidebar() {
    this.menuState.emit('out');
  }
}
