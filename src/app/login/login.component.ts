import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router

  ) { }
  signInForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern('^[A-Z].*')]),
    // adress : new FormControl('',[Validators.required,Validators.email]),
    // tel : new FormControl('',[Validators.required,Validators.pattern('[0-9]{8}')]),
  })

  save() {
    console.log(this.signInForm);
    this.router.navigate(['/products']);
    // save(){
    // this.ps.addProduct(this.RegisterForm.value as any)

  }
}
