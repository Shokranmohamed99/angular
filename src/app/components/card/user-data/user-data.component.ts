import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/post.models';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']  
})
export class UserDataComponent {
  @Input() post: IPost = {
    id: 1,
    userName: "",
    userImage: "",
    postDescription: "",
    postImage: "",
    isLiked: false,
    likeCount: 0
  };
}
