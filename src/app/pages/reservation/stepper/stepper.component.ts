import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Output() stepState = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onClickStep1() {
    this.stepState.emit('step1');
  }
}
