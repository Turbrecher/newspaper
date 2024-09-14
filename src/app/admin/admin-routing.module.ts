import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/list/user-list/user-list.component';
import { CommentListComponent } from './pages/list/comment-list/comment-list.component';
import { ArticleListComponent } from './pages/list/article-list/article-list.component';
import { UserCreateComponent } from './pages/create/user-create/user-create.component';
import { CommentCreateComponent } from './pages/create/comment-create/comment-create.component';
import { ArticleCreateComponent } from './pages/create/article-create/article-create.component';
import { CommentEditComponent } from './pages/edit/comment-edit/comment-edit.component';
import { ArticleEditComponent } from './pages/edit/article-edit/article-edit.component';
import { UserEditComponent } from './pages/edit/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: "admin",
    redirectTo: "admin/list/users"
  },

  {
    path: "admin/list/users",
    component: UserListComponent
  },

  {
    path: "admin/list/comments",
    component: CommentListComponent
  },

  {
    path: "admin/list/articles",
    component: ArticleListComponent
  },

  {
    path: "admin/create/users",
    component: UserCreateComponent
  },

  {
    path: "admin/create/comments",
    component: CommentCreateComponent
  },

  {
    path: "admin/create/articles",
    component: ArticleCreateComponent
  },

  {
    path: "admin/list/users/:id",
    component: UserEditComponent
  },

  {
    path: "admin/list/comments/:id",
    component: CommentEditComponent
  },

  {
    path: "admin/list/articles/:id",
    component: ArticleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
