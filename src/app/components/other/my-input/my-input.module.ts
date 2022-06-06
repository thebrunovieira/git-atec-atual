import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// The component
import { MyInputComponent } from './my-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MyInputComponent
  ]
})
export class MyInputModule { }
