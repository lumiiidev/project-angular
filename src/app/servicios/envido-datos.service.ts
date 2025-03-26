import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviandoDatosService {

  constructor( private http: HttpClient) { }

  enviar(datosForm:any):Observable<any>{
    return this.http.post('http://localhost:8000/api/users',datosForm);
  }
}
