import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  @Input() sessionStorage$;
  @Output() menuState = new EventEmitter<string>();
  station;
  address;
  address2;
  commune;
  availableBikes;
  status;
  availability;
  constructor() {}
  ngOnInit() {}
  onCloseSidebar() {
    this.menuState.emit('out');
  }
}
