import { Component, Input, inject } from '@angular/core';
import { IPost } from '../../models/post.models';
import { PostsService } from '../../services/posts.service';

interface IComment {
  user: string;
  text: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() post: IPost = {
    id: 0,
    userName: '',
    userImage: '',
    postDescription: '',
    postImage: '',
    isLiked: false,
    likeCount: 0
  };

  private postsService = inject(PostsService);

  comments: IComment[] = [];
  newComment: string = '';

  toggleLike(): void {
    this.post.isLiked = !this.post.isLiked;
    this.post.likeCount += this.post.isLiked ? 1 : -1;
  }

  addComment(): void {
    const trimmed = this.newComment.trim();
    if (trimmed) {
      this.comments.push({
        user: this.post.userName,
        text: trimmed
      });
      this.newComment = '';
    }
  }
}
