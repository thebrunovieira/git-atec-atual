import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { NgModule } from "@angular/core";

// Components
import { FilesComponent } from './files/files.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './init/about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';

const viewsRoutes: Route[] = [
    { path: 'about', component: AboutComponent },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'files', component: FilesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile/:id', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forChild(viewsRoutes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }