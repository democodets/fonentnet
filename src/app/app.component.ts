import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fonent';
  account : any;
  constructor(private app: AppService) {

  }
  ngOnInit(): void {
  let acc = sessionStorage.getItem('login')
   if(acc) {
    this.account = JSON.parse(acc);
    console.log({ab : this.account});
    
   }
}
  onLogout(){
    sessionStorage.clear();
    location.assign('/')
  }
}
