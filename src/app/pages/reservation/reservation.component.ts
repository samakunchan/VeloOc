import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  @Input() sessionStorageMap$;
  @Input() remainReservation;
  @Input() alert;
  @Output() menuState = new EventEmitter<string>();
  etiquette: boolean;
  reservationComplete: boolean;
  personalData: any;

  constructor() {}
  ngOnInit() {
    this.reservationComplete = false;
    if (this.remainReservation) {
      this.etiquette = true;
      this.personalData = {
        firstname: this.remainReservation.firstname,
        lastname: this.remainReservation.lastname,
        sign: this.remainReservation.sign,
      };
      this.reservationComplete = true;
    }
  }
  onCloseSidebar() {
    this.menuState.emit('out');
    this.etiquette = true;
  }
  onOpenSidebar() {
    this.menuState.emit('in');
    this.etiquette = false;
  }
  onGetPersonalData(data) {
    if (data) {
      this.reservationComplete = true;
      this.personalData = data;
    }
  }
  onGetCountEvent(state) {
    this.reservationComplete = state;
  }
  onCancelRes() {
    sessionStorage.clear();
    window.location.reload();
  }
}
