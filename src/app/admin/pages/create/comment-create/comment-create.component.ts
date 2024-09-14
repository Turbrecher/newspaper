import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextAreaComponent } from "../../../../shared/components/form/text-area/text-area.component";

@Component({
  selector: 'app-comment-create',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, TextAreaComponent],
  templateUrl: './comment-create.component.html',
  styleUrl: './comment-create.component.sass'
})
export class CommentCreateComponent {

  public createCommentForm!: FormGroup

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.createCommentForm = this.fb.group(
      {
        "content": ["", [Validators.required]],
        "user": ["", [Validators.required]],
        "article": ["", [Validators.required]]

      }
    )
  }


  createComment() {
    console.log("creado")
  }


  get content(){
    return this.createCommentForm.get("content") as FormControl
  }

  get user(){
    return this.createCommentForm.get("user") as FormControl
  }

  get article(){
    return this.createCommentForm.get("article") as FormControl
  }

}
