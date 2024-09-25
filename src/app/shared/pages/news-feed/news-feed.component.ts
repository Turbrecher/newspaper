import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.sass'
})
export class NewsFeedComponent {
  public articles!: Array<Article>

  constructor(private articleService: ArticleService) {

  }


  ngOnInit() {
    this.articles = []

    this.articleService.getAllArticles().subscribe((articles) => {
      articles.forEach((article) => {

        this.articles.push(article)
      })
    })
  }



}
