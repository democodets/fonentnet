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
  getItem(){
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

  checklogin(data : any){
    return this.http.post(`${api}/api/log-in`,data);
  }

}
