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
      console.log(res.poll);
      this.cats = res.poll; 

      for(let cats of res.data){
        this.cats = new Date(cats.start).toLocaleDateString('zh-Hans-CN') 
        console.log(  this.cats = new Date(cats.start).toLocaleDateString('zh-Hans-CN') );
        
      }
    })
    this.app.getItem().subscribe((res :any) => {
      this.items = res;
      
      
    })
   }
   
}
