import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { CommentCardComponent } from "../../components/comment-card/comment-card.component";
import { TextAreaComponent } from "../../components/form/text-area/text-area.component";
import { ButtonComponent } from "../../components/form/button/button.component";
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [CommentCardComponent, TextAreaComponent, ButtonComponent],
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.sass'
})
export class ArticleViewComponent {
  public article!: Article

  public comments!: Array<Comment>
  public id!: string | null

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {

  }


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
}
