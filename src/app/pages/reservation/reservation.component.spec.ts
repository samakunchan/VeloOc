import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationComponent } from './reservation.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CanvasComponent } from '../canvas/canvas.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationComponent, FormulaireComponent, StepperComponent, CanvasComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
