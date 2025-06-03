import { Component, inject, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../../models/post.models';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
   postsService =inject(PostsService);
  postAdded: any;

   submit() {
  if (this.postsService.postForm.valid) {
    this.postsService.addNewPost();
    this.postAdded.emit();
  } else {
    this.postsService.postForm.markAllAsTouched();
  }
}

}

