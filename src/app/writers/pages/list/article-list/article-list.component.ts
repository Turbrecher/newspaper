import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../../../shared/components/article-card/article-card.component";
import { RouterLink } from '@angular/router';
import { Article } from '../../../../shared/models/article';
import { ArticleService } from '../../../../shared/services/article.service';
import { ArticleWriterService } from '../../../services/article-writer.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.sass'
})
export class ArticleListComponent {
  articles: Array<Article> = []


  constructor(private articleWriterService: ArticleWriterService) {

  }

  ngOnInit() {
    this.articleWriterService.getWriterArticles().subscribe((articles) => {
      this.articles = articles
    })
  }
}
