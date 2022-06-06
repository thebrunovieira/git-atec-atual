import { Route, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

// The Component
import { TransparenceComponent } from './transparence.component';

// Components
import { EditTransparenceComponent } from './edit-transparence/edit-transparence.component';

const transparenceRoutes: Route[] = [
    { path: 'transparence', component: TransparenceComponent },
    { path: 'transparence/edit', component: EditTransparenceComponent }
]

@NgModule({
    imports: [RouterModule.forChild(transparenceRoutes)],
    exports: [RouterModule]
})
export class TransparenceRoutingModule { }