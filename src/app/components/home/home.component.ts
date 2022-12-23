import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
cats : any =[];
items : any = [];
   constructor(private app:AppService,
    ) {}

   ngOnInit(): void {
    this.app.getPoll().subscribe((res :any) => { 
     
      this.cats = res.poll; 
    })
    this.app.getItems().subscribe((res :any) => {
      this.items = res;
      
      
    })
   }
   
}
