import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../../../Api';
import Comment from '../../shared/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentAdminService {

  constructor(private http: HttpClient) { }



  getAllComments() {
    return this.http.get<Array<Comment>>(Api.URL + "comments");
  }
}
