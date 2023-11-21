import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  

  constructor(private http:HttpClient) { }

  storeuserData(data:any):Observable<any>{
    return this.http.post("http://www.localhost:8080/api/auth/signup",data)
  }
}
