import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.sass'
})
export class NewsFeedComponent {
  public defaultArticle!: Article
  public articles!: Array<Article>


  ngOnInit() {
    this.defaultArticle = {
      id: 1,
      title: "Title of the article",
      subtitle: "Subtitle",
      content: "Content of the article",
      date: "2014-04-12",
      time: "16:38",
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


    this.articles = [this.defaultArticle, this.defaultArticle, this.defaultArticle, this.defaultArticle, this.defaultArticle, this.defaultArticle, this.defaultArticle, this.defaultArticle]
  }



}
