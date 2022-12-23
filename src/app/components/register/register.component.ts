import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  file: any;

  checkErrors: any;
  formRegister: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
   address: new FormControl('', [Validators.required]),
  });

  getFile(event: any){
    this.file = event.target.files[0];
  }
  get f(){    
    return this.formRegister.controls;
    
  }
  constructor(private app: AppService,
    ) {}
  ngOnInit(): void {
  }
  
  on_register() {
    if(this.formRegister.invalid){
      return;
    }    
    this.formRegister.value.image = this.file.name;
    console.log(this.formRegister.value.image);
    console.log(this.file.name);
    
    
    this.app.get_register(this.formRegister.value).subscribe((res: any) => {   
      console.log(res);
      location.assign('/login');
    })
  }

}
