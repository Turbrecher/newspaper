import { Component } from '@angular/core';
import { InputComponent } from "../../../../shared/components/form/input/input.component";
import { TextAreaComponent } from "../../../../shared/components/form/text-area/text-area.component";
import { ButtonComponent } from "../../../../shared/components/form/button/button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Comment } from '../../../../shared/models/comment';

@Component({
  selector: 'app-comment-edit',
  standalone: true,
  imports: [InputComponent, TextAreaComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './comment-edit.component.html',
  styleUrl: './comment-edit.component.sass'
})
export class CommentEditComponent {


  public editCommentForm!: FormGroup
  public comment!: Comment

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()

    this.comment = {
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


    this.article.setValue(this.comment.article.id)
    this.user.setValue(this.comment.user.id)
    this.content.setValue(this.comment.content)


  }

  createForm() {
    this.editCommentForm = this.fb.group(
      {
        "content": ["", [Validators.required]],
        "user": ["", [Validators.required]],
        "article": ["", [Validators.required]]

      }
    )
  }


  editComment() {
    console.log("edited")
  }


  get content() {
    return this.editCommentForm.get("content") as FormControl
  }

  get user() {
    return this.editCommentForm.get("user") as FormControl
  }

  get article() {
    return this.editCommentForm.get("article") as FormControl
  }

}
