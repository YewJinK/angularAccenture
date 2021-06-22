import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  constructor(private postService: PostsService, //private pns: PushNotificationService
    ) { }

  ngOnInit() {
    // this.postService.getPosts().subscribe({
    //   next: data => 
    // }

    // this.http.get(environment.apiHost + '/posts').subscribe(data=> {
    //   this.posts = data;
    //   console.log(this.posts);
    // })

    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

  trackByFn(index){
    return index;
  }

  createPost(){
    let postObj = {
      title: 'Accenture',
      body: 'Avensys',
      userId: 1,
    }

    this.postService.createPost(postObj).subscribe(data => {
      console.log(data);
    })
  }
}