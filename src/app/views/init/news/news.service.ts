import { Observable } from 'rxjs';
import { baseUrl } from './../../../services/base-url.variable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsitemModel } from 'src/app/models/newsitem.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<NewsitemModel[]> {
    return this.http.get<NewsitemModel[]>(baseUrl + '/news');
  }
}
