import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorComponent, NgxEditorModule, Validators } from 'ngx-editor';
import { Article } from '../../../../shared/models/article';
import { InputComponent } from '../../../../shared/components/form/input/input.component';
import { ButtonComponent } from '../../../../shared/components/form/button/button.component';
import { ArticleAdminService } from '../../../../admin/services/article-admin.service';
import { ArticleWriterService } from '../../../services/article-writer.service';
import { ArticleService } from '../../../../shared/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, NgxEditorModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.sass'
})
export class ArticleEditComponent {


  public editArticleForm!: FormGroup
  public html!: string
  public editor!: Editor
  public article: Article = {}
  public id!: string


  constructor(private fb: FormBuilder, private articleWriterService: ArticleWriterService, private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router:Router) {

  }

  ngOnInit() {
    this.html = ""
    this.editor = new Editor()
    this.createForm()


    this.id = this.activatedRoute.snapshot.params['id'];
    this.articleService.getArticle(this.id).subscribe((article) => {
      this.article = article


      this.editArticleForm.get("title")?.setValue(this.article.title)
      this.editArticleForm.get("subtitle")?.setValue(this.article.subtitle)
      this.editArticleForm.get("content")?.setValue(this.article.content)
      this.editArticleForm.get("photo")?.setValue(this.article.photo)
      this.editArticleForm.get("writer")?.setValue(this?.article?.writer?.name)

    })


  }

  createForm() {
    this.editArticleForm = this.fb.group(
      {
        "title": ["", [Validators.required]],
        "subtitle": ["", [Validators.required]],
        "photo": ["", [Validators.required]],
        "content": ["", [Validators.required]],

      }
    )
  }

  editArticle() {
    let article: Article = {
      title: this.title.value,
      subtitle: this.subtitle.value,
      photo: this.photo.value,
      content: this.content.value,
    }


    this.articleWriterService.editArticle(article, this.id)
      .subscribe({
        next: (response) => { this.router.navigate(['writer/list/articles']) },
        error: (err) => { console.log(err) }
      })
  }

  deleteArticle() {
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
