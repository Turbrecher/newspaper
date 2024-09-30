import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Validators } from 'ngx-editor';
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { InputComponent } from '../../../../shared/components/form/input/input.component';
import { ArticleWriterService } from '../../../services/article-writer.service';
import { Article } from '../../../../shared/models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgxEditorModule, ButtonComponent, InputComponent],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.sass'
})
export class ArticleCreateComponent {

  public createArticleForm!: FormGroup
  public html!: string
  public editor!: Editor


  constructor(private fb: FormBuilder, private articleWriterService: ArticleWriterService, private router:Router) {

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
        "photo": ["", [Validators.required]],
        "content": ["", [Validators.required]],

      }
    )
  }

  createArticle() {

    let article: Article = {
      title: this.title.value,
      subtitle: this.subtitle.value,
      content: this.content.value,
      photo: this.photo.value
    }

    this.articleWriterService.createArticle(article).subscribe({
      next: (response) => { alert("Article created!"); this.router.navigate(['writer/list/articles']) },
      error: (err) => { console.log(err) },
    })
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
