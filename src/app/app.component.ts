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
  
   
}
  onLogout(){
    sessionStorage.clear();
    location.assign('/')
  }
}
