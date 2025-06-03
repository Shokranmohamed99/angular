import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']  
})
export class ChildComponent {
  @Input() message = '';
  @Output() sayHelloToParent = new EventEmitter<string>();  

  onClick() {
    this.sayHelloToParent.emit('hello dad');  
   }
}
