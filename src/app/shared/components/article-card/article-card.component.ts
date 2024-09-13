import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.sass'
})
export class ArticleCardComponent {

  @Input() article: Article = {
    id: 1,
    title: "Default Title of the article",
    subtitle: "Subtitle",
    content: "Content of the article",
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


  ngOnInit() {
  }

}
