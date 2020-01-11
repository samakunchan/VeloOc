import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselComponent } from './caroussel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CarousselComponent', () => {
  let component: CarousselComponent;
  let fixture: ComponentFixture<CarousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarousselComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create caroussel', () => {
    expect(component).toBeTruthy();
  });
});
