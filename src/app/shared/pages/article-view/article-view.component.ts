import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { CommentCardComponent } from "../../components/comment-card/comment-card.component";
import { TextAreaComponent } from "../../components/form/text-area/text-area.component";
import { ButtonComponent } from "../../components/form/button/button.component";
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [CommentCardComponent, TextAreaComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.sass'
})
export class ArticleViewComponent {
  public article!: Article

  public comments!: Array<Comment>
  public id!: string | null

  public commentForm: FormGroup = this.fb.group({
    "comment": ["", Validators.required]
  });

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private commentService: CommentService) {

  }


  //Initializations.
  ngOnInit() {
    this.comments = []
    this.article = {}


    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    this.articleService.getArticle(this.id).subscribe((article) => {
      this.article = article;

      this?.article?.comments?.forEach((comment) => {
        this.comments.push(comment)
      })
    })



  }


  //Method that creates a new comment.
  createComment($event: Event) {
    $event.preventDefault()

    let comment = {
      content: this.comment.value,
      article_id: this.id
    }

    this.commentService.createComment(comment).subscribe({
      next: (success) => { console.log(success); location.reload() },
      error: (error) => { console.log(error.message) }
    })
  }


  //getters.
  get comment() {
    return this.commentForm.get("comment") as FormControl;
  }
}
