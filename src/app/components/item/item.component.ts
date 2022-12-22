import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  id : any;
  item : any;
  constructor(private app:AppService,private activedRoutes: ActivatedRoute
    ) {}

    ngOnInit() : void {
      this.activedRoutes.paramMap.subscribe((query : any) => {
        this.id = query.get('id');
        this.app.getItemId(this.id).subscribe((res : any) => {
          this.item = res;
        });
      })

    }
}
