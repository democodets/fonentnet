import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PollComponent } from './components/poll/poll.component';
import { VoteComponent } from './components/vote/vote.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'item', component:ItemComponent},
  {path: 'vote', component:VoteComponent},
  {path: 'poll', component:PollComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
