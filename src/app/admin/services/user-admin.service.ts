import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../../../Api';
import { User } from '../../shared/models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }



  getAllUsers() {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.get<Array<User>>(Api.URL + "users", { headers });
  }

  getUser(id: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.get<User>(Api.URL + "users/" + id, { headers });
  }

  editUser(id: String, user: User) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.put(Api.URL + "users/" + id, user, { headers });
  }


  createUser(user: User) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.post(Api.URL + "register/", user, { headers });
  }


  deleteUser(id: String) {
    let headers = { "Authorization": "Bearer " + this.cookieService.get("token") }


    return this.http.delete(Api.URL + "users/" + id, { headers });
  }
}
