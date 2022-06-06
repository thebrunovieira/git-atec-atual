import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';

// Modules
import { MyInputModule } from '../components/other/my-input/my-input.module';
import { FooterModule } from './../components/template/footer/footer.module';

// Components
import { AboutComponent } from './init/about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FilesComponent } from './files/files.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AboutComponent,
    DocumentationComponent,
    FilesComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MyInputModule,
    FooterModule
  ]
})
export class ViewsModule { }
