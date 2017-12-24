import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    //Defining an empty path 
    path: '',
    
    //setting the component to 
    component: HomeComponent
  }, 
  {
    path: 'articles/:id',
    component: ArticleComponent
  }, 
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: CreateComponent
  },
];
//Add the article service you created, to the app.module file. 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
