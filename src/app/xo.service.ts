import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XoService {
  private baseUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getExampleData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/example-endpoint`);
  }

  postExampleData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/example-endpoint`, data);
  }
}
