import { Component } from '@angular/core';
import { IUser } from '../../../models/user.models';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  user: any= {
    userName: 'Ahmed Ali',
    userAge: 30,
    userImage: 'assets/john.jpg',
    userAddress: '123 Main St'
  };
  message ="";
  sayHello(e:Event){
    console.log(e)
     console.log('hello'+this.user.userName)

  }
  onInput(e:Event){
      this.message=((e.target as HTMLInputElement).value);
  }
}