import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

// The Component
import { NewsComponent } from './../../init/news/news.component';

// Component
import { EditNewsItemComponent } from './edit-news-item/edit-news-item.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CreateNewsItemComponent } from './create-news-item/create-news-item.component';
import { ConfigNewsComponent } from './config-news/config-news.component';

const newsRoutes: Route[] = [
    { path: '', component: NewsComponent },
    { path: 'news', children: [
        { path: 'config', component: ConfigNewsComponent },
        { path: 'item/create', component: CreateNewsItemComponent },
        { path: 'item/:id', component: NewsItemComponent },
        { path: 'item/:id/edit', component: EditNewsItemComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(newsRoutes)],
    exports: [RouterModule]
})
export class NewsRoutingModule { }