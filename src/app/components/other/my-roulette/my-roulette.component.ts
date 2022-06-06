import { Router } from '@angular/router';
import { Newsitem } from './../../../objects/newsitem.obj';
import {
  Component,
  Input,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  Renderer2, 
  ViewChild} from '@angular/core';

@Component({
  selector: 'my-roulette[news]',
  templateUrl: './my-roulette.component.html',
  styleUrls: ['./my-roulette.component.scss']
})
export class MyRouletteComponent implements OnInit, AfterViewInit {

  @Input() news: Newsitem[];
  @Input() tag: string;

  value: number;
  widthNewsitem: number;

  nextActive = true;

  @ViewChild('boxElement', { static: true }) boxElement: ElementRef<HTMLElement>;
  @ViewChild('completeRouletteElement', { static: true }) completeRouletteElement: ElementRef<HTMLElement>;
  @ViewChildren('newsitemElement') newsitemElement: QueryList<ElementRef<HTMLElement>>;
  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) this.news.shift();

    const empty = new Newsitem({
      id: -1,
      title: '',
      text: '',
      tag: 'empty',
      postDate: { day: 0, month: 0, year: 0, hour: 0, minute: 0 }
    })
    
    let aux: Newsitem[] = [];

    this.news.forEach((newsitem, i) => {
      
      if (i == 0) aux.unshift(empty);

      if (newsitem.verifyTag(this.tag) || !this.tag) aux.push(newsitem);

    })

    aux.push(empty);
    this.news = aux;
  }

  ngAfterViewInit(): void {
    this.widthNewsitem = this.newsitemElement.get(0)?.nativeElement.getBoundingClientRect().width as number;
    this.value = -this.widthNewsitem / 2;

    this.newsitemElement.forEach(element => {
      this.renderer.setStyle( element.nativeElement,
        'transform', `translateX(${this.value}px)` );
    })
  }


  /**
   * METODOS
   */
  
  private rollOneNext() {
    this.value -= this.widthNewsitem + 16;
    
    this.newsitemElement.forEach(element => {
      this.renderer.setStyle( element.nativeElement,
      'transform', `translateX(${this.value}px)` );
    })

    // console.log(this.value);
  }

  private rollOnePreviews() {
    this.value += this.widthNewsitem + 16;
    
    this.newsitemElement.forEach(element => {
      this.renderer.setStyle( element.nativeElement,
      'transform', `translate(${this.value}px)` )
    })
    
    // console.log(this.value);
  }

  rollNext() {
    // tamanho exato de cada newitem
    this.widthNewsitem = this.newsitemElement.get(0)?.nativeElement.getBoundingClientRect().width as number;
    // tamanho exato da parte visível da roleta de notícias
    const widthBox = this.boxElement.nativeElement.getBoundingClientRect().width - (this.widthNewsitem / 2 + 16);
    // tamanho dxato da roleta de notícias
    const complete = this.completeRouletteElement.nativeElement.getBoundingClientRect().width;
    // quantidade de noticias que é possível visualizar
    const views = Math.floor(widthBox / (this.widthNewsitem + 16));
    // quantidade de itens na roleta de notícias
    const lenght = this.news.length - views - 2;

    if (this.value > lenght * -(this.widthNewsitem + 16) - (this.widthNewsitem / 2))
      for (let i = 0; i < views; i++)
        if (this.value > lenght * -(this.widthNewsitem + 16) - (this.widthNewsitem / 2))
          this.rollOneNext();
    else{
      this.newsitemElement.forEach(element => {
        this.renderer.setStyle( element.nativeElement,
        'transform', `translate(${-complete + widthBox + (this.widthNewsitem + 16)}px)` );
      })
      this.nextActive = false;
    }
  }
  
  rollPreviews() {
    // tamanho exato de cada newitem
    this.widthNewsitem = this.newsitemElement.get(0)?.nativeElement.getBoundingClientRect().width as number;
    // tamanho exato da roleta de notícias
    const widthBox = this.boxElement.nativeElement.getBoundingClientRect().width - (this.widthNewsitem / 2 + 16);
    // quantidade de noticias que é possível visualizar
    const views = Math.floor(widthBox / (this.widthNewsitem + 16));

    if (this.value < -(this.widthNewsitem / 2)) {
      this.nextActive = true;
      for (let i = 0; i < views; i++)
        if (this.value < -(this.widthNewsitem / 2))
          this.rollOnePreviews();
        }
  }

  /**
   * ROUTER
   */
  navigate(id: number) {
    this.router.navigate([`/news/item/${id}`]);
  }
}
