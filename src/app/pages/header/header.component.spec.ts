import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuService } from '../../core/services/menu.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let menuService: MenuService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [MenuService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    menuService = TestBed.get(MenuService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit Menu[]', () => {
    menuService.menuSubject.subscribe(res => {
      expect(res).toEqual([
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
      ]);
    });
    menuService.emitMenu();
  });
  it('should use the event window scroll', () => {
    spyOn(component, 'onScroll');
    window.dispatchEvent(new Event('scroll'));
    expect(component.onScroll).toHaveBeenCalled();
  });
});
