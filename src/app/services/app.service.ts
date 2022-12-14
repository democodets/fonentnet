import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
   
    
  }
  checklogin(data : any){
    return this.http.post(`${api}/log-in`,data);
  }
}
