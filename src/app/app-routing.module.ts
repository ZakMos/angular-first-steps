import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [

  {
    path: '',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'article',
    component:ArticleComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:'category',
    component:CategoryComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
