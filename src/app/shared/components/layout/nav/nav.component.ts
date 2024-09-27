import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  public isAdmin: boolean = false
  public isWriter: boolean = false
  public isAuthenticated: boolean = false


  constructor(private cookieService: CookieService, private profileService: ProfileService, private router: Router) {

  }


  ngOnInit() {
    //Check authentication.
    if (this.cookieService.get("token")) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }


  logout() {
    this.profileService.logout(this.cookieService.get("token")).subscribe({
      next: (response) => {
        alert(response.message);
        this.cookieService.set("token", "", -1000);
        this.ngOnInit();
        this.router.navigate(['login'])
      },
      error: (err) => { alert(err.message) },
    })
  }


}
