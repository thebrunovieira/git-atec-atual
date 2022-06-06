import { ContactRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// The Component
import { ContactsComponent } from './contacts.component';

// Components
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';

@NgModule({
  declarations: [
    ContactsComponent,
    EditContactsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactsModule { }
