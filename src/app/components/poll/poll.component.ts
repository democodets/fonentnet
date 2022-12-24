import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
  [x: string]: any;
id : any = 0;
cat : any;
pol : any = [];
cats : any = [];
items : any = [];
votes : any = [];
seachText: any;
account : any ;
constructor(private app:AppService,private activedRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let acc = sessionStorage.getItem('login')
   if(acc) {
    this.account = JSON.parse(acc);
   }

    this.app.getPoll().subscribe((res :any) => { 
      // console.log(res.poll);
      this.cats = res.poll; 
    })
    this.activedRoutes.paramMap.subscribe((query: any) => {
      this.id = query.get('id');
      this.app.getPollById(this.id).subscribe((res :any) => {
      // console.log(res.itemPerPoll)
        this.items = res.itemPerPoll;
        console.log(this.items);
        
      });
    this.app.getPollId(this.id).subscribe((res :any) => {
      // console.log(res);
      this.cat = res;
    })
    })
   }
   //yeu
   
   vote(itemId:number) {
    console.log(itemId);
    
    this.app.voteItem(itemId).subscribe((res:any) => {
      // if (res.action == true){
      //   alert('Đã bình chọn')
      //   // location.assign('/home');
      // } else if (res.action == false){
      //   alert('Hết tiền ròi')
      // }
      alert('cảm ơn bạn');
      window.location.reload();
      console.log(res);      
      
    })
}
}
