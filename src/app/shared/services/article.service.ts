import { Injectable } from '@angular/core';
import { Api } from '../../../Api'; '../../../Api';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getAllArticles() {
    return this.http.get<Array<Article>>(Api.URL + "articles")
  }

  getArticleComments(id: string | null) {
    return this.http.get<Array<Comment>>(Api.URL + "articlecomments/" + id)
  }

  getArticle(id: string | null) {
    return this.http.get<Article>(Api.URL + "articles/" + id)
  }

  ngOnInit() {

  }

  constructor(private http: HttpClient) { }
}
