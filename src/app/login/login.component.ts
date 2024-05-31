import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signInForm = new FormGroup({
    userName : new FormControl('',[Validators.required,Validators.minLength(6)]),
    password : new FormControl('',[Validators.required,Validators.minLength(7)]),
    // adress : new FormControl('',[Validators.required,Validators.email]),
    // tel : new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
  })
  save(){
    console.log(this.signInForm)
  }
}
