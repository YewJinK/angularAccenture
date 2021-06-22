import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/_services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  singlePost: any;
  postId: string;
  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postService.getSinglePost(this.postId).subscribe(data => {
      this.singlePost = data;
    })

    // this.http.get(`${environment.apiHost}/posts/${this.postId}`).subscribe(data=>{
    //   this.singlePost = data;
    //   console.log(this.singlePost);
    // })
  }

}
