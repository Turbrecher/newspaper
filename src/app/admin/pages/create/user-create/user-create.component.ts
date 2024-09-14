import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.sass'
})
export class UserCreateComponent {

  public createUserForm!: FormGroup

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.createUserForm = this.fb.group(
      {
        "name": ["", [Validators.required]],
        "surname": ["", [Validators.required]],
        "username": ["", [Validators.required]],
        "email": ["", [Validators.required]],
        "password": ["", [Validators.required]],

      }
    )
  }


  createUser() {
    console.log("Creado")
  }



  get name() {
    return this.createUserForm.get("name") as FormControl
  }

  get surname() {
    return this.createUserForm.get("surname") as FormControl
  }

  get username() {
    return this.createUserForm.get("username") as FormControl
  }

  get email() {
    return this.createUserForm.get("email") as FormControl
  }

  get password() {
    return this.createUserForm.get("password") as FormControl
  }
}
