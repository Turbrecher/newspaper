import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ArticleViewComponent } from './pages/article-view/article-view.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [

  {
    path: "news", component: NewsFeedComponent
  },

  {
    path: "login", component: LoginComponent
  },

  {
    path: "register", component: RegisterComponent
  },
  
  {
    path: "profile", component: ProfileComponent
  },

  {
    path: "news/:id", component: ArticleViewComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
