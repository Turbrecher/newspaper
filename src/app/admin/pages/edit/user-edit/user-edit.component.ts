import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../shared/models/user';
import { UserAdminService } from '../../../services/user-admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.sass'
})
export class UserEditComponent {


  public editUserForm!: FormGroup

  public user: User = {
    id: "1",
    username: "Vittorio",
    name: "Victor",
    surname: "Vera",
    email: "victor@correo.es",
    password: "12345678",
    photo: "victor.png"
  }

  constructor(private fb: FormBuilder, private userAdminService: UserAdminService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.createForm()


    this.userAdminService.getUser(this.activatedRoute.snapshot.params["id"]).subscribe((user) => {
      this.user = user

      this.name.setValue(this.user.name)
      this.surname.setValue(this.user.surname)
      this.username.setValue(this.user.username)
      this.email.setValue(this.user.email)
    })

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


    let user: User = {
      name: this.name.value,
      surname: this.surname.value,
      username: this.username.value,
      email: this.email.value
    }

    if (this.password.value != "") {
      let user: User = {
        name: this.name.value,
        surname: this.surname.value,
        username: this.username.value,
        email: this.email.value,
        password: this.password.value
      }
    }

    if (this.user.id != undefined) {

      this.userAdminService.editUser(this.user.id, user).subscribe({
        next: (response) => {
          alert("User succesfully edited")
          this.router.navigate(['admin/list/users'])

        },
        error: (err) => { alert("The change couldn't be done") }
      })
    }

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
