import { Component } from '@angular/core';
import { CommentCardComponent } from "../../../../shared/components/comment-card/comment-card.component";
import { RouterLink } from '@angular/router';
import Comment from '../../../../shared/models/comment';
import { CommentAdminService } from '../../../services/comment-admin.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommentCardComponent, RouterLink],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.sass'
})
export class CommentListComponent {
  comments !: Array<Comment>

  constructor(private commentAdminService: CommentAdminService) {

  }


  ngOnInit() {
    this.commentAdminService.getAllComments()
      .subscribe((comments) => {
        this.comments = comments
      })
  }
}
