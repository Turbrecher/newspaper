import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.sass'
})
export class UserEditComponent {


  public editUserForm!: FormGroup

  public user!: User

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()

    this.user = {
      id: 1,
      username: "Vittorio",
      name: "Victor",
      surname: "Vera",
      email: "victor@correo.es",
      password: "12345678",
      photo: "victor.png"
    }

    this.name.setValue(this.user.name)
    this.surname.setValue(this.user.surname)
    this.username.setValue(this.user.username)
    this.email.setValue(this.user.email)

  }

  createForm() {
    this.editUserForm = this.fb.group(
      {
        "name": ["", [Validators.required]],
        "surname": ["", [Validators.required]],
        "username": ["", [Validators.required]],
        "email": ["", [Validators.required]],
        "password": ["", [Validators.required]],

      }
    )
  }


  editUser() {
    console.log("Edited")
  }

  deleteUser() {
    console.log("Deleted")
  }



  get name() {
    return this.editUserForm.get("name") as FormControl
  }

  get surname() {
    return this.editUserForm.get("surname") as FormControl
  }

  get username() {
    return this.editUserForm.get("username") as FormControl
  }

  get email() {
    return this.editUserForm.get("email") as FormControl
  }

  get password() {
    return this.editUserForm.get("password") as FormControl
  }



}
