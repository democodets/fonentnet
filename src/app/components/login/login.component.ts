import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 formLogin: FormGroup = new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl()
 });
  constructor(private app:AppService) {
  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
get f() {
  return this.formLogin.controls
}

  onLogin () {
    if(this.formLogin.invalid) {return;}
    this.app.checklogin(this.formLogin.value).subscribe((res:any) => {
      console.log(res)
    });
    // console.log(this.formLogin.value)

  }
}


