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
constructor(private app:AppService,private activedRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
   addvote(id: number) {
    this.app.getVote(this.id, id).subscribe((res :any) => {
      
    })
   }


   vote(idCandidate:number) {
    this.app.action_vote_candidate(idCandidate).subscribe((res:any) => {

      console.log(res);
      this.app.getPollById(this.id).subscribe((res :any) => {
        this.votes = res;
         
        // console.log(res.itemPerPoll)
          this.items = res.itemPerPoll;
          console.log(this.items.voteQtt + 1);
        this.votes = this.items.voteQtt ++ 

          console.log(this.votes)
          
        });

      
      
      
    })
 
}
}
