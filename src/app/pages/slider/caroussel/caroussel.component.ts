import { Component, Input, OnInit } from '@angular/core';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { state, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
  animations: [
    zoomInOnEnterAnimation(),
    trigger('thumbState', [
      state(
        'inactive',
        style({
          opacity: 0,
          transform: 'scale(0.9)',
        }),
      ),
      state(
        'active',
        style({
          opacity: 1,
          transform: 'scale(1)',
        }),
      ),
      // cubic-bezier from http://easings.net/
      transition('inactive => active', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
      transition('active => inactive', animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)')),
    ]),
  ],
})
export class CarousselComponent implements OnInit {
  @Input() id;
  @Input() alt;
  @Input() url;
  @Input() header;
  @Input() subheader;
  @Input() paragraph;
  @Input() link;
  @Input() isActive; // TODO le garder pour fade les messages
  @Input() caroussel;
  animationState = false;
  constructor() {}

  ngOnInit() {}

  getImageUrl() {
    return `url(${this.url})`;
  }
  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }
}
