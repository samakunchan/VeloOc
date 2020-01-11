import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss'],
})
export class FormulaireComponent implements OnInit {
  reservationForm: FormGroup;
  stepper: string;
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
    }
    console.log(this.reservationForm.value.lastname);
  }
  onGetStepState(stepState: string) {
    this.stepper = stepState;
  }
}
