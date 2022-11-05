import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Entrada } from '../models/analisis';
@Injectable({
  providedIn: 'root'
})
export class AnalizadoresService {
  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  getAnalisis(){
    return this.http.get(`http://localhost:3000/analizar`)

  }
  LeerDatos(entrada:any){
    return this.http.post(`${this.API_URL}/leer`, entrada)

  }
}
