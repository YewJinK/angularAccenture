import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule)
  },
  {
    path:'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  // {
  //   path:'careers', component: CareersComponent
  // },
  {
    path:'industries', loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule)
  },
  {
    path:'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'signup',component: ListOfRegisteredUsersComponent
  },
  {
    path:'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  {
    path:'rxjs-operators', component: RxjsOperatorsComponent
  },
  {
    path:'material-examples', loadChildren: () => import('./_material/_material.module').then(m => m.MaterialModule)
  },
  {
    path:'**',component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
