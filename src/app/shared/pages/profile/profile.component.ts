import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/form/button/button.component";
import { InputComponent } from '../../components/form/input/input.component';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {

  public profileForm!: FormGroup

  constructor(private fb: FormBuilder, private profileService: ProfileService, private router: Router, private cookieService: CookieService) {

  }

  createProfileForm() {
    this.profileForm = this.fb.group(
      {
        "name": ["", [Validators.required]],
        "surname": ["", [Validators.required]],
        "username": ["", [Validators.required]],
        "email": ["", [Validators.required, Validators.email]],
        "password": ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9?¿_-]{5,50}|^$/)]],
      }
    )
  }

  ngOnInit() {
    let token = this.cookieService.get("token")
    this.profileService.profile(token).subscribe({
      next: (response) => { 
        this.name.setValue(response.user.name)
        this.surname.setValue(response.user.surname)
        this.username.setValue(response.user.username)
        this.email.setValue(response.user.email)
      },
      error: (err) => { alert(err.message) },
    })


    this.createProfileForm()

  }


  //GETTERS
  get name() {
    return this.profileForm.get("name") as FormControl
  }

  get surname() {
    return this.profileForm.get("surname") as FormControl
  }

  get username() {
    return this.profileForm.get("username") as FormControl
  }
  get email() {
    return this.profileForm.get("email") as FormControl
  }

  get password() {
    return this.profileForm.get("password") as FormControl
  }

}
