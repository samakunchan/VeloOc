import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '../../core/model/menu.model';
import { MenuService } from '../../core/services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrolling: boolean;
  @Input() title;
  @Input() adressMalt;
  @Input() adressWebsite;
  @Input() github;
  menuSelected: number;
  menus: Menu[];
  menuSubscription: Subscription;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.getMenuList();
    this.menuService.emitMenu();
    this.menuSelected = 0;
    this.scrolling = false;
    this.onScroll();
  }
  getMenuList() {
    return this.menuSubscription = this.menuService.menuSubject.subscribe((menu: Menu[]) => this.menus = menu);
  }
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    return this.scrolling = window.scrollY >= 50;
  }
  onMenuSelected(event, index: number) {
    event.preventDefault();
    this.menuSelected = index;
    if (this.menuSelected === 0) {
      document.getElementById('toSlide').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (this.menuSelected === 1) {
      document.getElementById('toContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  ngOnDestroy(): void {
    this.menuSubscription.unsubscribe();
  }
}
