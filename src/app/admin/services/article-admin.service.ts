import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../../../Api';
import { Article } from '../../shared/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleAdminService {

  constructor(private http: HttpClient) { }



  getAllArticles() {
    return this.http.get<Array<Article>>(Api.URL + "articles");
  }
}
