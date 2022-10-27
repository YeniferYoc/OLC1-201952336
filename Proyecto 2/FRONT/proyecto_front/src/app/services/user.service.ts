import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "http://localhost:8080"
  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('http://localhost:8080/incre');
  }
  setdata(json:any){
    return this.http.post('http://localhost:8080/set_incremental',json)

  }
}
