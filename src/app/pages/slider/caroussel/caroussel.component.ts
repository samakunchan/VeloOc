import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss'],
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
  constructor() {}

  ngOnInit() {}

  getImageUrl() {
    return `url(${this.url})`;
  }
}
