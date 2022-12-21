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
    return this.http.get(`${api}/item/api/all`)
  }
  checklogin(data : any){22
    return this.http.post(`${api}/api/log-in`,data);
  }
  getProductById(id: number): any {
    return this.http.get<any>(`${api}/poll/api/${id}`)
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
}
