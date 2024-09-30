import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Article } from '../../shared/models/article';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../../Api';

@Injectable({
  providedIn: 'root'
})
export class ArticleWriterService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }


  getWriterArticles() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.get<Array<Article>>(Api.URL + "writerarticles", { headers })
  }

  createArticle(article: Article) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.post(Api.URL + "articles/", article, { headers })
  }


  editArticle(article: Article, id: string) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }

    return this.http.put(Api.URL + "articles/" + id, article, { headers })

  }
}
