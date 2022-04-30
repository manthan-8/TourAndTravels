import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;

 constructor(private fb: FormBuilder){
   this.loginForm = this.fb.group({
     email: new FormControl("",[Validators.required,Validators.email]),
     password: new FormControl("",[Validators.required,Validators.minLength(8)])
   });
 }
login(){
 console.log(this.loginForm.value);
}
}