import { Component } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/form/input/input.component";
import { ButtonComponent } from "../../components/form/button/button.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.sass'
})
export class RegisterComponent implements ControlValueAccessor {


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
        "email": ["", [Validators.required]],
        "password": ["", [Validators.required]],
      }
    )
  }

  constructor(private fb: FormBuilder) {

  }

  //VALUE ACCESSORS ATTRIBUTES.
  input!: string
  onChange = () => { }
  onTouched = () => { }
  //VALUE ACCESSORS METHODS.
  writeValue(input: string): void {
    this.input = input
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }



  //Function that register this user in the DB.
  register() {
    console.log({
      "username": this.username.value,
      "password": this.username.value,
      "name": this.username.value,
      "surname": this.username.value,
      "email": this.username.value,
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
