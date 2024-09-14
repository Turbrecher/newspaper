import { Component } from '@angular/core';
import { CommentCardComponent } from "../../../../shared/components/comment-card/comment-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommentCardComponent, RouterLink],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.sass'
})
export class CommentListComponent {
  nComments :Array<number> = [0,1,2,3,4,5,6,7,8,9,9,1,2,2,34]
}
