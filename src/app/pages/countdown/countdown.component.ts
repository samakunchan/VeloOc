import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  minutes: number;
  minInMs: number;
  displayTime: any;
  countDownState: boolean;
  @Output() countEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {
    this.minutes = 20;
    this.minInMs = this.minutes * 60 * 1000;
    this.timer();
    this.countDownState = false;
  }
  timer() {
    const chrono = setInterval(() => {
      const time = Date.now() - Number(sessionStorage.getItem('count'));
      const timeRemain = this.minInMs - time;

      const minutesRemain = Math.floor(timeRemain / 1000 / 60);
      let secondsRemain = Math.floor((timeRemain / 1000) % 60);

      if (String(secondsRemain).length === 1) {
        secondsRemain = +'0' + secondsRemain;
      }
      if (time < this.minInMs) {
        this.countDownState = true;
        this.countEvent.emit(true);
        return (this.displayTime = minutesRemain + 'min ' + secondsRemain + 's');
      } else {
        clearInterval(chrono);
        sessionStorage.clear();
        this.countDownState = false;
        if (!sessionStorage.getItem('count')) {
          setTimeout(() => {
            this.countEvent.emit(false);
          }, 3000);
        }
      }
    }, 1000);
  }
}
