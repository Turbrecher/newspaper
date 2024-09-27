import { Component } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/form/input/input.component";
import { ButtonComponent } from "../../components/form/button/button.component";
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent {


  public registerForm!: FormGroup

  ngOnInit() {
    this.createRegisterForm()
  }

  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        "name": ["", [Validators.required]],
        "surname": ["", [Validators.required]],
        "username": ["", [Validators.required]],
        "email": ["", [Validators.required, Validators.email]],
        "password": ["", [Validators.required, Validators.pattern(/^[A-Za-z0-9?¿_-]{5,50}|^$/)]],
      }
    )
  }

  constructor(private fb: FormBuilder, private profileService: ProfileService, private router: Router) {

  }




  //Function that register this user in the DB.
  register() {

    let user = {
      "username": this.username.value,
      "password": this.password.value,
      "name": this.name.value,
      "surname": this.surname.value,
      "email": this.email.value,
    }

    console.log(user)
    this.profileService.registerUser(user).subscribe({
      next: (response) => { alert(response.message); this.router.navigate(['login']) },
      error: (err) => { alert(err.message) }
    })


  }




  //GETTERS
  get name() {
    return this.registerForm.get("name") as FormControl
  }

  get surname() {
    return this.registerForm.get("surname") as FormControl
  }

  get username() {
    return this.registerForm.get("username") as FormControl
  }
  get email() {
    return this.registerForm.get("email") as FormControl
  }

  get password() {
    return this.registerForm.get("password") as FormControl
  }




}
