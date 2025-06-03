import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  private _users: string[] = ['Ali'];

  addNewUser(newUser: string) {
    this._users.push(newUser);
  }

  deleteUser(userName: string) {
    this._users = this._users.filter((user) => user !== userName);
  }

  get users() {
    return this._users;
  }
}
