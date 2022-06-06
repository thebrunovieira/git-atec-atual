import { ViewsModule } from './views/views.module';
import { MenuModule } from './components/template/menu/menu.module';
import { ContactsModule } from './views/init/contacts/contacts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Modules
import { TransparenceModule } from './views/init/transparence/transparence.module';
import { NewsModule } from './views/init/news/news.module';

// The Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
    MenuModule,
    ViewsModule,
    NewsModule,
    TransparenceModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
