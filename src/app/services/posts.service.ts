import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPost } from '../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
 private _posts: IPost[] = [
    
      {
        id: 0,
        userName: "Ali",
        userImage: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid&w=740",
        postDescription: "My first post",
        postImage: "https://st3.depositphotos.com/12985790/17379/i/450/depositphotos_173790436-stock-photo-happy-child.jpg",
        isLiked: false,
        likeCount: 0
      },
    {
      id: 1,
      userName: "Asmaa",
      userImage: "https://img.freepik.com/premium-vector/young-woman-head-portrait-beautiful-girl-face-avatar-beautiful-attractive-female-character_260216-70.jpg",
      postDescription: "My first post",
      postImage: "https://i.pinimg.com/736x/9c/5d/98/9c5d98518e1b28601b89a5ecb0c903eb.jpg",
      isLiked: false,
      likeCount: 0
    },
    {
      id: 2,
      userName: "Sama",
      userImage: "https://img.freepik.com/premium-vector/young-woman-head-portrait-beautiful-girl-face-avatar-beautiful-attractive-female-character_260216-70.jpg",
      postDescription: "My first post",
      postImage: "https://khadijabeauty.com/wp-content/uploads/2019/02/IMG_000000_000000-14.jpg",
      isLiked: false,
      likeCount: 0
    },
    {
      id: 3,
      userName: "Mohamed",
      userImage: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid&w=740",
      postDescription: "My first post",
      postImage: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-04/indian-baby-boy-names-mc-240403-02ed4c.jpg",
      isLiked: false,
      likeCount: 0
    },
    {
      id: 4,
      userName: "Yara",
      userImage: "https://img.freepik.com/premium-vector/young-woman-head-portrait-beautiful-girl-face-avatar-beautiful-attractive-female-character_260216-70.jpg",
      postDescription: "My first post",
      postImage: "https://i.pinimg.com/736x/88/3a/3d/883a3d0d3c6b74b04a3808e1ce432e0d.jpg",
      isLiked: false,
      likeCount: 0
    }
  ];

postForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userImage: new FormControl('', Validators.required),
    postDescription: new FormControl('', Validators.required),
    postImage: new FormControl('', Validators.required),
  });

  getPosts(): IPost[] {
    return this._posts;
  }

  addNewPost() {
    if (this.postForm.valid) {
      const newPost: IPost = {
        id: this._posts.length > 0 ? this._posts[this._posts.length - 1].id + 1 : 0,
        userName: this.postForm.value.userName || '',
        userImage: this.postForm.value.userImage || '',
        postDescription: this.postForm.value.postDescription || '',
        postImage: this.postForm.value.postImage || '',
        isLiked: false,
        likeCount: 0
      };
      this._posts.push(newPost);
      this.postForm.reset();
    }
  }
}

