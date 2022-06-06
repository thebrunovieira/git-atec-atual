import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { MyRouletteComponent } from './my-roulette.component';

@NgModule({
  declarations: [
    MyRouletteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyRouletteComponent
  ]
})
export class MyRouletteModule { }
