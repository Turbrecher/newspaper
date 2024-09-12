import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/form/input/input.component";
import { ButtonComponent } from "../../components/form/button/button.component";

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
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
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
    console.log({
      "username":this.username.value,
      "password":this.password.value,
    })

  }

}
