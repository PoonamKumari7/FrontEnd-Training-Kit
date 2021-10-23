import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide : boolean = false;

  constructor(private fb : FormBuilder, private route: Router) { }

  ngOnInit() {
   }

  loginForm : FormGroup = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(8)]]
  });
  
  onLogin(){
      if (!this.loginForm.valid) {
        // this.route.navigate(['/login']);
        return;
      }
      console.log(this.loginForm.value);
    }
  }
