import { LoginService } from './../../../../views/login/login.service';
import { MenuService } from './../menu.service';
import { MenuOptionModel } from './../../../../models/option.model';
import { Component, OnInit, QueryList, ElementRef, ViewChildren, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-on',
  templateUrl: './menu-on.component.html',
  styleUrls: ['./menu-on.component.scss']
})
export class MenuOnComponent implements OnInit {

  menu: MenuOptionModel[];
  menuAccount: MenuOptionModel[] = [
    {
      name: 'meu perfil',
    },
    {
      name: 'sair',
      ico: 'logout'
    }
  ];
  menuAccountActivate: boolean = false;

  @ViewChildren('optionList') optionList: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('accountMenu', { static: true }) accountMenu: ElementRef<HTMLElement>;
  constructor(
    private login: LoginService,
    private service: MenuService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.menu = Array.prototype.concat(this.service.get(), this.service.getMenuForServers());

    // this.login.getUsers().subscribe(users => {
    //   this.login.setUserLoged(users[0]);

    //   this.menuAccount[0].routerLink = `/profile/${ this.login.getUserLoged().getID() }`
    // })
  }

  /* ----------------------------------LOGIN-------------------------------- */

  getName() { return this.login.getUserLoged().get('name') as string; }
  getProfile() {
    return this.login.getUserLoged().getImageProfile() ? `${this.login.getUserLoged().getImageProfile()}` : 'default'; }

  /* ----------------------------------------------------------------------- */

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
