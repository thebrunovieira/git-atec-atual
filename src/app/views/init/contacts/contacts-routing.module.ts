import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { ContactsComponent } from './contacts.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const contactsRoutes: Route[] = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'contacts/edit', component: EditContactsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(contactsRoutes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }