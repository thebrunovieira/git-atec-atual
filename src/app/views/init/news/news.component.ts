import { Newsitem } from './../../../objects/newsitem.obj';
import { NewsService } from './news.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: Newsitem[] = [];

  cover = {
    list: [] as Newsitem[],
    index: -1
  }

  @ViewChild('coverImage', { static: true }) coverImage: ElementRef<HTMLElement>;
  constructor(
    private service: NewsService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.service.getNews().subscribe(news => {
      for (let i = 0; i < news.length; i++) {
        this.news.push(new Newsitem(news[i]));
        this.news[i].setTitle(`${this.news[i].getTitle()}_${this.news[i].getID()}`);
      }

      for (let i = 0; i <= 5; i++) {
        this.cover.list.push(this.news[i]);
      }

      this.onClickInSelect(0);
    })
  }

  onClickInSelect(index: number) {
    this.cover.index = index;

    const aux = `center ${this.cover.list[index].getCover()?.position}%`;

    this.renderer.setStyle(
      this.coverImage.nativeElement, 'object-position', aux
    )
  }

}
