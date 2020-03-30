import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  baseUrl = 'http://localhost:8080/api/ecr/enfants'

  constructor(private http : HttpClient) { }

getEnfant(id:number) : Observable<any>{
return this.http.get(`${this.baseUrl}/${id}`);
}

addEnfant(enfant:object) : Observable<object> {

  return this.http.post(`${this.baseUrl}` , enfant) ;
}

updateEnfant(id: number , value : any) : Observable<object> {

  return this.http.put(`${this.baseUrl}/${id}` , value) ;
}

deleteEnfant(id: number) : Observable<any> {

  return this.http.delete(`${this.baseUrl}/${id}`) ;
}

getEnfantList() : Observable<any> {

  return this.http.get(`${this.baseUrl}`) ;
}

}
