import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule, NgxEditorModule, FormsModule],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.sass'
})
export class ArticleCreateComponent {




  public createArticleForm!: FormGroup
  public html!: string
  public editor!: Editor


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.html = ""
    this.editor = new Editor()
    this.createForm()
  }

  createForm() {
    this.createArticleForm = this.fb.group(
      {
        "title": ["", [Validators.required]],
        "subtitle": ["", [Validators.required]],
        "writer": ["", [Validators.required]],
        "photo": ["", [Validators.required]],
        "content": ["", [Validators.required]],

      }
    )
  }

  createArticle() {
    console.log(this.createArticleForm.value)
  }

  get title() {
    return this.createArticleForm.get("title") as FormControl
  }

  get subtitle() {
    return this.createArticleForm.get("subtitle") as FormControl
  }

  get writer() {
    return this.createArticleForm.get("writer") as FormControl
  }

  get photo() {
    return this.createArticleForm.get("photo") as FormControl
  }

  get content() {
    return this.createArticleForm.get("content") as FormControl
  }

}
