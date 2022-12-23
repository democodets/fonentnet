import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error : string = '';
 formLogin: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',Validators.required)
 });
  constructor(private app:AppService
   ) {
  
  }
  ngOnInit(): void {
   
  }
  get f() {
  return this.formLogin.controls
}
  onLogin(){
    this.app.checklogin(this.formLogin.value).subscribe((res: any) => {
      if (res) {
        sessionStorage.setItem('login', JSON.stringify(res));
        console.log(res);
        
        location.assign('/');
      } 
      else {
        this.error = "tài khoản không đúng"
      }
    })
  }
}


