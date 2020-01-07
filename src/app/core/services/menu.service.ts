import { Injectable } from '@angular/core';
import { Menu } from '../model/menu.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuSubject = new Subject<Menu[]>();
  private menus: Menu[] = [];
  constructor() {
    this.menus = [
      {
        id: 0,
        title: 'Tutorial Slide',
      },
      {
        id: 1,
        title: 'Map',
      },
      {
        id: 2,
        title: 'About App',
      },
    ];
  }
  emitMenu() {
    this.menuSubject.next(this.menus.slice());
  }
}
