import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// The Components
import { MenuOffComponent } from './menu-off/menu-off.component';
import { MenuOnComponent } from './menu-on/menu-on.component';

@NgModule({
  declarations: [
    MenuOffComponent,
    MenuOnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuOffComponent,
    MenuOnComponent
  ]
})
export class MenuModule { }
