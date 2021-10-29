import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide : boolean = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
   }

  loginForm : FormGroup = this.fb.group({
    name : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    password : ['', [Validators.required, Validators.minLength(8)]]
  });
  
  onLogin(){
      if (!this.loginForm.valid) {
        return;
      }
      console.log(this.loginForm.value);
    }
  }
