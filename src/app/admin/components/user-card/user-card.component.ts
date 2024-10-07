import { Component, Input } from '@angular/core';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.sass'
})
export class UserCardComponent {
  @Input() user: User = {
    id: "1",
    username: "Vittorio",
    name: "Victor",
    surname: "Vera",
    email: "victor@correo.es",
    password: "12345678",
    photo: "victor.png"
  }
}
