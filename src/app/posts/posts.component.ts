import { Component, OnInit } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { first, map, mergeMap, switchMap, takeLast, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { PostsService } from '../_services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  count:number = 0;
  startClick = new Subject<void>();

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

    //switchMap
    const switchMapSample = this.postService.getPosts().pipe(
      switchMap(posts => {
        return this.postService.getSinglePost(1).pipe(
          tap(singlePost => {
            // console.log(posts)
            // console.log(singlePost)
            const allData = { singlePost };
            return allData;
          })
        )
      })
    )
    switchMapSample.subscribe(r => console.log);

    //mergeMap
    const mergeMapSample = this.postService.getPosts().pipe(
      mergeMap(posts => {
        return this.postService.getSinglePost(1).pipe(
          map(singlePost => {
            const allposts = { posts, singlePost };
            return allposts;
          })
        )
      })
    )
    mergeMapSample.subscribe(res => console.log(res));

    // first() - prevents multiple clicks, allows only one click
    const clickEvent = fromEvent(document, 'click');
    clickEvent.pipe(first()).subscribe(() => {
      console.log("Document is clicked only once!");
    });

    // takeWhile() - allows multiple action until a condition fails
    clickEvent.pipe(takeWhile(()=>this.count<3)).subscribe(() => {
      console.log("Document allowed to click 3 times");
      this.count++;
    });

    // takeLast() - prevents multiple clicks, allows only one click
    const sourceTakeLast = of('Angular', 'ReactJs', 'VueJs');
    sourceTakeLast.pipe(takeLast(2)).subscribe(res => console.log(res));
    
    // takeUntil() - allows multiple action until a condition fails
    clickEvent.pipe(takeUntil(this.startClick)).subscribe(()=>{
      console.log("clicked");
    });
  }

  stopClick() {
    this.startClick.next();
    this.startClick.complete();
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