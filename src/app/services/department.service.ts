import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Department } from 'app/interfaces/Department.interface';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  create(department: Department): Observable<any> {
    return this.http.post(`${this.baseUrl}/departments`, department);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/departments`);
  }

}
