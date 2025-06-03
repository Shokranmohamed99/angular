import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
 loginForm =new FormGroup({
  'email': new FormControl('',[
    Validators.required,
    // Validators.pattern('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
    ]),
  'password':new FormControl(''),
    
  

 })
isEmailRequird: any;
 onSubmit(){
   console.log("this.loginForm.value")
   console.log("Touched :" ,this.loginForm.controls.email.touched);
   console.log("Dirty :" ,this.loginForm.controls.email.dirty);
   console.log("Errors :" ,this.loginForm.controls.email.errors);

 }
 onReset(){
  this.loginForm.reset()
 }
  
 get isEmailValid(){
  return this.loginForm.controls.email.errors?.['required']&& this.loginForm.controls.email.touched
 }
  get isEmailMatches(){
  return this.loginForm.controls.email.errors?.['pattern']&& this.loginForm.controls.email.touched
 }
}

