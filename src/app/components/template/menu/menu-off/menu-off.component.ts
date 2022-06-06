import { MenuService } from './../menu.service';
import { MenuOptionModel } from './../../../../models/option.model';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-menu-off',
  templateUrl: './menu-off.component.html',
  styleUrls: ['./menu-off.component.scss']
})
export class MenuOffComponent implements OnInit {

  menu: MenuOptionModel[];
  menuAccount: MenuOptionModel[] = [
    {
      name: 'Entrar',
      ico: 'login',
      routerLink: '/login'
    },
    {
      name: 'Cadasto',
    },
  ];
  menuAccountActivate: boolean = false;

  @ViewChildren('optionList') optionList: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('accountMenu', { static: true }) accountMenu: ElementRef<HTMLElement>;
  constructor(
    private service: MenuService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.menu = this.service.get();
  }

  onMouseOver(index: number, option: MenuOptionModel) {
    if (option.sub) { this.renderer.setStyle(
      this.optionList.get(index)?.nativeElement.children.item(1),
      'height', `${option.sub?.length * 3.2}rem`
    ); this.renderer.setStyle(
      this.optionList.get(index)?.nativeElement.children.item(1),
      'padding', `1.2rem`
    ); };
  }

  onMouseLeave(index: number, option: MenuOptionModel) {
    if(option.sub) { this.renderer.setStyle(
      this.optionList.get(index)?.nativeElement.children.item(1),
      'height', '0'
    ); this.renderer.setStyle(
      this.optionList.get(index)?.nativeElement.children.item(1),
      'padding', '0 1.2rem'
    ); }
  }

  onClick() {
    if (this.menuAccountActivate) { this.renderer.setStyle(
      this.accountMenu.nativeElement,
      'height', '0'
    ); this.renderer.setStyle(
      this.accountMenu.nativeElement,
      'padding', '0 1.2rem'
    ); }
    else { this.renderer.setStyle(
      this.accountMenu.nativeElement,
      'height', `${this.menuAccount.length * 3.2}rem`
    ); this.renderer.setStyle(
      this.accountMenu.nativeElement,
      'padding', '1.2rem'
    ); }
    
    this.menuAccountActivate = !this.menuAccountActivate;
  }

  onMouseLeaveAccount() {
    this.renderer.setStyle(
      this.accountMenu.nativeElement,
      'height', `0`
    ); this.renderer.setStyle(
      this.accountMenu.nativeElement,
      'padding', '0 1.2rem'
    );

    this.menuAccountActivate = false;
  }
}