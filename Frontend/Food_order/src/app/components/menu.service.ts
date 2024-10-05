import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'http://localhost:8097/api/menu-items';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post('http://localhost:8097/api/orders', order);
  }
}
