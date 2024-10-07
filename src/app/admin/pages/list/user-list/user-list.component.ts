import { Component } from '@angular/core';
import { UserCardComponent } from "../../../components/user-card/user-card.component";
import { RouterLink } from '@angular/router';
import { User } from '../../../../shared/models/user';
import { UserAdminService } from '../../../services/user-admin.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass'
})
export class UserListComponent {
  users!: Array<User>


  constructor(private userAdminService: UserAdminService) { }

  ngOnInit() {
    this.userAdminService.getAllUsers().subscribe((users) => {
      this.users = users
    })
  }
}
