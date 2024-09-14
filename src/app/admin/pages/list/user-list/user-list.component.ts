import { Component } from '@angular/core';
import { UserCardComponent } from "../../../components/user-card/user-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent {
  nUsers: Array<any> = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 0]
}
