import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SearchFilterPipe } from '../_custom-pipe/search-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PostsComponent, PostDetailsComponent, SearchFilterPipe],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule
  ]
})
export class PostsModule { }
