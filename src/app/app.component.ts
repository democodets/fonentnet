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
  let acc = localStorage.getItem('login')
   if(acc) {
    this.account = JSON.parse(acc);
    console.log({});
    
   }
}
  onLogout(){
    localStorage.clear();
    location.assign('/')
  }
}
