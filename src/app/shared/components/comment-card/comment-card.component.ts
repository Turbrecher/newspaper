import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.sass'
})
export class CommentCardComponent {
  @Input() comment: any = {
    id: 1,
    content: "This is a comment",
    date: "09-12-2024",
    time: "14:04",
    article: {
      id: 1,
      title: "Title of the article",
      subtitle: "Subtitle",
      content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit a eros ultricies imperdiet non non augue. Nam aliquet ligula leo, sed tristique urna cursus non. Vivamus auctor gravida elit, in gravida arcu sodales porta. Suspendisse mollis sapien velit, eu ultricies magna luctus tincidunt. Sed sollicitudin, ex sed interdum semper, enim ex imperdiet risus, id finibus sem tortor in quam. Aenean quis pulvinar enim. Praesent lacinia venenatis volutpat. Pellentesque vitae neque id diam mollis commodo laoreet at mauris. Vestibulum vel est euismod, vehicula ligula a, placerat nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit a eros ultricies imperdiet non non augue. Nam aliquet ligula leo, sed tristique urna cursus non. Vivamus auctor gravida elit, in gravida arcu sodales porta. Suspendisse mollis sapien velit, eu ultricies magna luctus tincidunt. Sed sollicitudin, ex sed interdum semper, enim ex imperdiet risus, id finibus sem tortor in quam. Aenean quis pulvinar enim. Praesent lacinia venenatis volutpat. Pellentesque vitae neque id diam mollis commodo laoreet at mauris. Vestibulum vel est euismod, vehicula ligula a, placerat nisl. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit a eros ultricies imperdiet non non augue. Nam aliquet ligula leo, sed tristique urna cursus non. Vivamus auctor gravida elit, in gravida arcu sodales porta. Suspendisse mollis sapien velit, eu ultricies magna luctus tincidunt. Sed sollicitudin, ex sed interdum semper, enim ex imperdiet risus, id finibus sem tortor in quam. Aenean quis pulvinar enim. Praesent lacinia venenatis volutpat. Pellentesque vitae neque id diam mollis commodo laoreet at mauris. Vestibulum vel est euismod, vehicula ligula a, placerat nisl. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit a eros ultricies imperdiet non non augue. Nam aliquet ligula leo, sed tristique urna cursus non. Vivamus auctor gravida elit, in gravida arcu sodales porta. Suspendisse mollis sapien velit, eu ultricies magna luctus tincidunt. Sed sollicitudin, ex sed interdum semper, enim ex imperdiet risus, id finibus sem tortor in quam. Aenean quis pulvinar enim. Praesent lacinia venenatis volutpat. Pellentesque vitae neque id diam mollis commodo laoreet at mauris. Vestibulum vel est euismod, vehicula ligula a, placerat nisl. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit a eros ultricies imperdiet non non augue. Nam aliquet ligula leo, sed tristique urna cursus non. Vivamus auctor gravida elit, in gravida arcu sodales porta. Suspendisse mollis sapien velit, eu ultricies magna luctus tincidunt. Sed sollicitudin, ex sed interdum semper, enim ex imperdiet risus, id finibus sem tortor in quam. Aenean quis pulvinar enim. Praesent lacinia venenatis volutpat. Pellentesque vitae neque id diam mollis commodo laoreet at mauris. Vestibulum vel est euismod, vehicula ligula a, placerat nisl. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit a eros ultricies imperdiet non non augue. Nam aliquet ligula leo, sed tristique urna cursus non. Vivamus auctor gravida elit, in gravida arcu sodales porta. Suspendisse mollis sapien velit, eu ultricies magna luctus tincidunt. Sed sollicitudin, ex sed interdum semper, enim ex imperdiet risus, id finibus sem tortor in quam. Aenean quis pulvinar enim. Praesent lacinia venenatis volutpat. Pellentesque vitae neque id diam mollis commodo laoreet at mauris. Vestibulum vel est euismod, vehicula ligula a, placerat nisl. </p>",
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
        photo: "victor.png"
      }
    },
    user: {
      id: 1,
      username: "Vittorio",
      name: "Victor",
      surname: "Vera",
      email: "victor@correo.es",
      password: "12345678",
      photo: "victor_largo.jpeg"
    }
  }
}
