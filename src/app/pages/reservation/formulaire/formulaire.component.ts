import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  reservationForm: FormGroup;
  stepper: string;
  @Output() sessionStoragePersonalData$ = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.stepper = 'step1';
    this.reservationForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onSubmit() {
    if (this.reservationForm.value.lastname && this.reservationForm.value.firstname) {
      this.stepper = 'step2';
      sessionStorage.setItem('firstname', this.reservationForm.value.firstname);
      sessionStorage.setItem('lastname', this.reservationForm.value.lastname);
    }
  }
  onGetStepState(stepState: string) {
    this.stepper = stepState;
  }
  onGetSign(sign) {
    this.sessionStoragePersonalData$.emit({ firstname: sessionStorage.getItem('firstname'), lastname: sessionStorage.getItem('lastname'), sign });
  }
}
