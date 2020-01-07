import { Component, HostListener, OnInit } from '@angular/core';
import { SliderService } from '../../core/services/slider.service';
import { Caroussel } from '../../core/model/caroussel.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  images: Caroussel[];
  caroussel: number;
  animation;
  constructor(private sliderService: SliderService) {}

  ngOnInit() {
    this.caroussel = 0;
    this.images = this.sliderService.caroussel;
    this.executeSlideAuto();
  }

  executeSlideAuto() {
    this.animation = setInterval(() => {
      this.caroussel++;
      if (this.caroussel >= this.images.length) {
        this.caroussel = 0;
      }
    }, 30000);
  }
  @HostListener('window:keydown', ['$event'])
  keyDownEvent(event) {
    if (event.code === 'ArrowRight') {
      this.onNext();
    } else if (event.code === 'ArrowLeft') {
      this.onPrevious();
    }
  }
  onPrevious() {
    window.clearInterval(this.animation);
    this.executeSlideAuto();
    if (this.caroussel === 0) {
      this.caroussel = this.images.length;
    }
    this.caroussel--;
  }

  onNext() {
    window.clearInterval(this.animation);
    this.executeSlideAuto();
    this.caroussel++;
    if (this.caroussel >= this.images.length) {
      this.caroussel = 0;
    }
  }
  onSelectSlider(index: number) {
    return this.caroussel = index;
  }
}
