import { Component, Injectable } from '@angular/core';


@Injectable({
   providedIn:'root'
})
export class UserDataService {
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
