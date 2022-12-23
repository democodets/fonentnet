import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  [x: string]: any;
  constructor(private http: HttpClient) { 
  }
  getPoll(){
    return this.http.get(`${api}/poll/api/all`)
  }
  getItems(){
    return this.http.get(`${api}/item/api/all`)
  }
  getPollById(id : number){
    return this.http.get(`${api}/poll/api/byid/${id}`)
  }
  getPollId(id : number){
    return this.http.get(`${api}/poll/api/${id}`)
  }
  getItemId(id : number){
    return this.http.get(`${api}/item/api/${id}`)
  }

  getVote( itemid : number, userid : number){
    let data = {
      itemId : itemid,
      userId : userid
    }
  return this.http.post(`${api}/user/api/vote/{id}`,data);
  }

  checklogin(data : any){
    return this.http.post(`${api}/api/log-in`,data,{withCredentials:true});
  }
  getAccountInfo() {
    let storge = sessionStorage.getItem('login');
    if (storge) {
      return JSON.parse(storge);
    }
    else {
      return null;
    }
  }

  get_register(data: any): any {
    return this.http.post<any>(`${api}/register`, data);
  }
  action_vote_candidate(id:number){
    return this.http.get<any>(`${api}/user/vote/${id}`,{withCredentials:true});
  }
}
