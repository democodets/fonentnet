import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent {
id : number = 0;

constructor(private app:AppService,private activedRoutes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activedRoutes.snapshot.paramMap.get('id');
  }
 
}
