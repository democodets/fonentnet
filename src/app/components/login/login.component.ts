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
 formLogin: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',Validators.required)
 });
  constructor(private app:AppService
    , private router:Router) {
  
  }
  ngOnInit(): void {
   
  }
  get f() {
  return this.formLogin.controls
}

  onLogin () {
    console.log(this.formLogin.value)
    if(this.formLogin.invalid) {return;}
    this.app.checklogin(this.formLogin.value).subscribe((res:any) => {
      if(res.User) {
        sessionStorage.setItem('login', JSON.stringify(res.User))
        this.router.navigate(['/'])
      }
      
    });
    // console.log(this.formLogin.value)

  }
}


