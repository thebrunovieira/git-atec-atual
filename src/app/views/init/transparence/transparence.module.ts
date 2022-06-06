import { TransparenceRoutingModule } from './transparence-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// The Component
import { TransparenceComponent } from './transparence.component';

// Components
import { EditTransparenceComponent } from './edit-transparence/edit-transparence.component';

@NgModule({
  declarations: [
    TransparenceComponent,
    EditTransparenceComponent
  ],
  imports: [
    CommonModule,
    TransparenceRoutingModule
  ]
})
export class TransparenceModule { }
