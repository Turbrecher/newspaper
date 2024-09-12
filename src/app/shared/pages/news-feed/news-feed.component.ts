import { Component } from '@angular/core';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [ArticleCardComponent],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.sass'
})
export class NewsFeedComponent {
  public  articles:Array<Number> = [1,2,3,4,5,6,7,8,9,10]
}
