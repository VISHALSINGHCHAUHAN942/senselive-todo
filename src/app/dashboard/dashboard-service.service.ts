import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient, private router: Router) {}

  private readonly API_URL = 'http://localhost:3000';
  private username = 'manoj.thakare@elkem.com';

  getuserdata(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/getSchedule/manoj.thakare@elkem.com`);
  }
}
