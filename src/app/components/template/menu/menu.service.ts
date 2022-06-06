import { MenuOptionModel } from './../../../models/option.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: MenuOptionModel[] = [
    {
      name: 'Início',
      routerLink: '/'
    },
    {
      name: 'Navegar',
      sub: [
        {
          name: 'Sobre',
          routerLink: '/about'
        },
        {
          name: 'Transparência',
          routerLink: '/transparence'
        },
        {
          name: 'Contatos',
          routerLink: '/contacts'
        },
      ]
    },
  ]
  constructor() { }

  get() { return this.menu; }

  getMenuForServers() {
    const menu = [
      { name: 'Servidor', sub: [
          { name: 'Avisos', routerLink: '/advices' },
          { name: 'Arquivos', routerLink: '/files' },
          { name: 'Suporte', link: 'http://suporteatec.cge.lan/' }
        ]
      },
      { name: 'Documentação', routerLink: '/documentation' }];
    return menu as MenuOptionModel[];
  }
}
