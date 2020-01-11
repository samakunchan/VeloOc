import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { SliderService } from '../../core/services/slider.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let sliderService: SliderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderComponent, CarousselComponent],
      imports: [BrowserAnimationsModule],
      providers: [SliderService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    sliderService = TestBed.get(SliderService);
    fixture.detectChanges();
  });

  it('should create slider', () => {
    expect(component).toBeTruthy();
  });
  it('should use the slideService', () => {
    expect(sliderService).toBeTruthy();
  });
  it('should use the event window scroll', () => {
    spyOn(component, 'keyDownEvent');
    window.dispatchEvent(new Event('keydown'));
    expect(component.keyDownEvent).toHaveBeenCalled();
  });
});
