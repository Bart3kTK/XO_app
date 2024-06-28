import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { game } from './game';

@Injectable({
  providedIn: 'root'
})
export class XoService {
  private baseUrl = 'http://localhost:8080/XO'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<game[]> {
    return this.http.get<game[]>(`${this.baseUrl}/games`);
  }

//   postExampleData(data: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/example-endpoint`, data);
//   }
}
