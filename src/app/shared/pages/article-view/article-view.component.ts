import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { CommentCardComponent } from "../../components/comment-card/comment-card.component";
import { TextAreaComponent } from "../../components/form/text-area/text-area.component";
import { ButtonComponent } from "../../components/form/button/button.component";

@Component({
  selector: 'app-article-view',
  standalone: true,
  imports: [CommentCardComponent, TextAreaComponent, ButtonComponent],
  templateUrl: './article-view.component.html',
  styleUrl: './article-view.component.sass'
})
export class ArticleViewComponent {
  article!: Article
  comments = [1,2,3,4,5,6,7,8,9,0,1]


  ngOnInit() {
    this.article = {
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
        photo:"victor.png"
      }
    }
  }
}
