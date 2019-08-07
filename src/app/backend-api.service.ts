import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
  }

  getCustomerList() {
    return this.http.get(`${this.apiUrl}/index`);
  }

  create(name: string, email: string, address: string): Observable<any> {
    const data = {name, email, address};
    // console.log(data);
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  delete(id) {
    // console.log('delete:', id);
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  detail(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/detail/${id}`);
  }

  update(id: number, name: string, email: string, address: string): Observable<any> {
    const data = {name, email, address};
    // console.log(data);
    return this.http.post(`${this.apiUrl}/update/${id}`, data);
  }
}
