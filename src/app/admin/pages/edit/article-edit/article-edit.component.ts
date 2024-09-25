import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Validators } from 'ngx-editor';
import { Article } from '../../../../shared/models/article';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [InputComponent, ButtonComponent, NgxEditorModule, ReactiveFormsModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.sass'
})
export class ArticleEditComponent {


  public editArticleForm!: FormGroup
  public html!: string
  public editor!: Editor
  public article!:Article


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.html = ""
    this.editor = new Editor()
    this.createForm()
    this.article = {
      id: 1,
      title: "Default Title of the article",
      subtitle: "Subtitle",
      content: "<p style='color:blue'>The downfall of everything</p>",
      date: "2002-04-25",
      time: "20:00",
      photo: "newspaper_logo.png",
      writer: {
        id: 1,
        username: "Vittorio",
        name: "Victor",
        surname: "Vera",
        email: "victor@correo.es",
        password: "12345678",
        photo:"victor.png"
      }
    }

    this.editArticleForm.get("title")?.setValue(this.article.title)
    this.editArticleForm.get("subtitle")?.setValue(this.article.subtitle)
    this.editArticleForm.get("content")?.setValue(this.article.content)
    this.editArticleForm.get("photo")?.setValue(this.article.photo)
    this.editArticleForm.get("writer")?.setValue(this?.article?.writer?.name)
  }

  createForm() {
    this.editArticleForm = this.fb.group(
      {
        "title": ["", [Validators.required]],
        "subtitle": ["", [Validators.required]],
        "writer": ["", [Validators.required]],
        "photo": ["", [Validators.required]],
        "content": ["", [Validators.required]],

      }
    )
  }

  editArticle() {
    console.log(this.editArticleForm.value)
  }

  deleteArticle(){
    console.log("deleted")
  }

  get title() {
    return this.editArticleForm.get("title") as FormControl
  }

  get subtitle() {
    return this.editArticleForm.get("subtitle") as FormControl
  }

  get writer() {
    return this.editArticleForm.get("writer") as FormControl
  }

  get photo() {
    return this.editArticleForm.get("photo") as FormControl
  }

  get content() {
    return this.editArticleForm.get("content") as FormControl
  }

}
