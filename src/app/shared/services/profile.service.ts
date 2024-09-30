import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Api } from '../../../Api';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }


  registerUser(user: User) {
    return this.http.post<any>(Api.URL + "register", user);
  }

  loginUser(user: User) {
    return this.http.post<any>(Api.URL + "login", user);
  }

  profile(token: string) {

    let headers = { "Authorization": "Bearer " + token }

    return this.http.post<any>(Api.URL + "profile", {}, { headers });
  }


  logout(token: string) {

    let headers = { "Authorization": "Bearer " + token }

    return this.http.post<any>(Api.URL + "logout", {}, { headers });

  }


  getRole(token: string) {
    let headers = { "Authorization": "Bearer " + token }

    return this.http.post<any>(Api.URL + "role", {}, { headers });
  }
}
