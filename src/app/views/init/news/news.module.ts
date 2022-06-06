import { MyRouletteModule } from './../../../components/other/my-roulette/my-roulette.module';
import { NewsRoutingModule } from './news-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// The Component
import { NewsComponent } from './news.component';

// Components
import { ConfigNewsComponent } from './config-news/config-news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CreateNewsItemComponent } from './create-news-item/create-news-item.component';
import { EditNewsItemComponent } from './edit-news-item/edit-news-item.component';

@NgModule({
  declarations: [
    NewsComponent,
    ConfigNewsComponent,
    NewsItemComponent,
    CreateNewsItemComponent,
    EditNewsItemComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MyRouletteModule
  ]
})
export class NewsModule { }
