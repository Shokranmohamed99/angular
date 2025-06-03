import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  messageFromParent="hello mychild";
  messageFromChild ="";


myChildSayHello(message:string){
  this.messageFromChild=message;
  console.log(message);
}
}
