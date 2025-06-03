import { Component, Input } from '@angular/core';
import { IPost } from '../../../models/post.models';


@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css'] 
})
export class CardContentComponent {
  @Input() post: IPost={
    id: -1,
    userName: "",
    userImage: "",
    postDescription: "",
    postImage: "",
    isLiked: false,
    likeCount: 0
  }
}
