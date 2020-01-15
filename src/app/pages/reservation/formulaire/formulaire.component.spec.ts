import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireComponent } from './formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from '../stepper/stepper.component';
import { CanvasComponent } from '../../canvas/canvas.component';

describe('FormulaireComponent', () => {
  let component: FormulaireComponent;
  let fixture: ComponentFixture<FormulaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireComponent, StepperComponent, CanvasComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
