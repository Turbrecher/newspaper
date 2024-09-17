import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './pages/list/article-list/article-list.component';
import { ArticleCreateComponent } from './pages/create/article-create/article-create.component';
import { ArticleEditComponent } from './pages/edit/article-edit/article-edit.component';

const routes: Routes = [
  {
    path: "writer",
    redirectTo: "writer/list/articles"
  },

  {
    path: "writer/list/articles",
    component: ArticleListComponent
  },

  {
    path: "writer/create/articles",
    component: ArticleCreateComponent
  },

  {
    path: "writer/list/articles/:id",
    component: ArticleEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritersRoutingModule { }
