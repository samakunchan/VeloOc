import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0,0,0)',
        }),
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        }),
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'velooc';
  adressMalt = 'https://www.malt.fr/profile/cedricbadjah?overview=true';
  adressWebsite = 'https://my-services.samakunchan.fr';
  github = 'https://github.com/samakunchan/velooc';
  menuState = 'in';
  onGetMenuState(menuState: string) {
    this.menuState = menuState;
  }
}
