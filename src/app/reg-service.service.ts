import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  private backendURL = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) { }

  sendDataToBackend(data: any): Observable<any> {
    return this.http.post<any>(`${this.backendURL}/storeData`, data);
  }
}
