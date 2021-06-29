import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { DisplayContactsComponent } from './display-contacts/display-contacts.component';

const routes: Routes = [
  {
    path:'', component: ContactComponent
  },
  {
    path:'display-contact', component: DisplayContactsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
