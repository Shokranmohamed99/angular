import { Component, inject, OnInit } from '@angular/core';
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

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  showPostForm() {
    this.isPostFormShowen = true;
  }

  hidePostForm() {
    this.isPostFormShowen = false;
  }

  onPostAdded() {
    this.posts = this.postsService.getPosts();
    this.isPostFormShowen = false;
  }
}
