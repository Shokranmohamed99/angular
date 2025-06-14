// import { Component, inject, OnInit } from '@angular/core';
// import { IPost } from './models/post.models';
// import { PostsService } from './services/posts.service';
// import { Component, ViewChild, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
// showForm() {
// throw new Error('Method not implemented.');
// }
//   postsService = inject(PostsService);

//   posts: IPost[] = [];
//   isPostFormShowen = false;

//   ngOnInit() {
//     this.posts = this.postsService.getPosts();
//   }

//   // showPostForm() {
//   //   this.isPostFormShowen = true;
//   // }

//   // hidePostForm() {
//   //   this.isPostFormShowen = false;
//   // }
//    isPostFormShowen = false;

//   @ViewChild('postFormSection') postFormSection!: ElementRef;

//   showPostForm() {
//     this.isPostFormShowen = true;
//     // Wait for the form to appear before scrolling
//     setTimeout(() => {
//       this.postFormSection?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
//     }, 0);
//   }

//   onPostAdded() {
//     this.posts = this.postsService.getPosts();
//     this.isPostFormShowen = false;
//   }
// }
import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { IPost } from './models/post.models';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postsService = inject(PostsService);
  posts: IPost[] = [];
  isPostFormShowen = false;

  @ViewChild('postFormSection') postFormSection!: ElementRef;

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  showPostForm() {
    this.isPostFormShowen = true;
    // Scroll to the post form after it's rendered
    setTimeout(() => {
      this.postFormSection?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }

  onPostAdded() {
    this.posts = this.postsService.getPosts();
    this.isPostFormShowen = false;
  }
}

