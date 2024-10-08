import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../../../Api';
import { Article } from '../../shared/models/article';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ArticleAdminService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }



  getAllArticles() {
    return this.http.get<Array<Article>>(Api.URL + "articles");
  }

  getArticle(id: String) {
    return this.http.get<Article>(Api.URL + "articles/" + id);
  }

  editArticle(id: String, article: Article) {

  }

  deleteArticle(id: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.delete<any>(Api.URL + "articles/" + id, { headers });
  }


  createArticle(article: Article) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.post<Array<Article>>(Api.URL + "articles", article, { headers });
  }
}
