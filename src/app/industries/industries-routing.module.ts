import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriesComponent } from './industries.component';
import { Login } from '../_guards/login.service'
import { AutomotiveComponent } from './automotive/automotive.component';


const routes: Routes = [
  {
    path:'', component: IndustriesComponent, canActivate:[Login]
  },
  {
    path:'automotive', component: AutomotiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
