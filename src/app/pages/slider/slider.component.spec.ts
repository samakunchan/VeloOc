import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from './slider.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { SliderService } from '../../core/services/slider.service';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let sliderService: SliderService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderComponent, CarousselComponent],
      providers: [SliderService]
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
  xit('should use the previous() function', () => {
    spyOn(component, 'onPrevious');
    expect(component.onPrevious).toHaveBeenCalled();
  });
  xit('should use the next() function', () => {
    spyOn(component, 'onNext');
    expect(component.onNext).toHaveBeenCalled();
  });
  xit('should use the onSelectSlider() function', () => {
    spyOn(component, 'onSelectSlider');
    expect(component.onSelectSlider).toHaveBeenCalled();
  });
});
