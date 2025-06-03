import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
@Injectable({
   providedIn:'root'
})
export class UserComponent {
private _users:string[]=[
    'Ali'
   ];
   addNewUser(newUser :string){
    this._users.push(newUser);
   }
   deleteUser(userName:string){
    this._users =this._users.filter((user)=> user !==userName)
   }
   get users(){
    return this._users;
   }
}
