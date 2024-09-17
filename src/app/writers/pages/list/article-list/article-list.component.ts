import { Component } from '@angular/core';
import { ArticleCardComponent } from "../../../../shared/components/article-card/article-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleCardComponent, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.sass'
})
export class ArticleListComponent {
  nArticles:Array<number> = [1,2,3,4,5,6,7,8,9,0,1]
}
