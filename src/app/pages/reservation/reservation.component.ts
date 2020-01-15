import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  @Input() sessionStorageMap$;
  @Output() menuState = new EventEmitter<string>();
  etiquette: boolean;
  reservationComplete: boolean;
  personalData: any;

  constructor() {}
  ngOnInit() {
    this.reservationComplete = false;
  }
  onCloseSidebar() {
    this.menuState.emit('out');
    this.etiquette = true;
  }
  onOpenSidebar() {
    this.menuState.emit('in');
    this.etiquette = false;
    // TODO Emettre par défaut etiquette true si le compteur est actif
  }
  onGetPersonalData(data) {
    if (data) {
      this.reservationComplete = true;
      this.personalData = data;
    }
  }
}
