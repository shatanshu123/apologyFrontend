import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApologyService {
  constructor(private http: HttpClient) {}

  getApologyMessage(): Observable<{ message: string }> {
   // return this.http.get<{ message: string }>('http://localhost:8080/api/sorry');
    return this.http.get<{ message: string }>('https://apologycode.onrender.com/api/sorry');
  }
}
