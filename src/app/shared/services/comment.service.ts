import { Injectable } from '@angular/core';
import { Api } from '../../../Api';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  getAllComments() {
    return this.http.get<Array<Comment>>(Api.URL + "comments")
  }

  getComment(id: string | null) {
    return this.http.get<Comment>(Api.URL + "comments/" + id)
  }

  createComment(comment: any) {
    let headers = { Authorization: "Bearer " + this.cookieService.get("token") }

    return this.http.post<Comment>(Api.URL + "comments/", comment, {headers});
  }

  editComment(comment: any, id: string | null) {
    return this.http.put<Comment>(Api.URL + "comments/" + id, comment);
  }

  ngOnInit() {

  }

  constructor(private http: HttpClient, private cookieService: CookieService) { }
}
