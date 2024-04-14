import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Department } from 'app/interfaces/Department.interface';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  token = localStorage.getItem('token');

  headers = new HttpHeaders();

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) {

    this.headers.set('Authorization', 'Bearer ' + this.token);

  }

  create(department: Department): Observable<any> {
    return this.http.post(`${this.baseUrl}/departments`, department, { headers: this.headers });
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/departments`, { headers: this.headers });
  }

}
