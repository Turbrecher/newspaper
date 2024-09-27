import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/form/input/input.component";
import { ButtonComponent } from "../../components/form/button/button.component";
import { ProfileService } from '../../services/profile.service';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass',

})
export class LoginComponent {
  public loginForm!: FormGroup


  //CONSTRUCTOR
  constructor(private fb: FormBuilder, private profileService: ProfileService, private cookieService: CookieService, private router: Router) {

  }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      "username": ["", [Validators.required]],
      "password": ["", [Validators.required]],
    })
  }

  get username() {
    return this.loginForm.get("username") as FormControl
  }

  get password() {
    return this.loginForm.get("password") as FormControl
  }


  //Login function.
  login() {
    let user = {
      "username": this.username.value,
      "password": this.password.value,
    }

    this.profileService.loginUser(user).subscribe({
      next: (response) => { alert(response.message); this.cookieService.set("token", response.token); location.href = "news" },
      error: (error) => { alert(error.message); this.cookieService.set('token', '', -1000) },
    })



  }

}
