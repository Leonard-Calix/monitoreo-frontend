import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environment';
import { Municipality } from 'app/interfaces/Municipality.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipalitiesService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  create(department: Municipality): Observable<any> {
    return this.http.post(`${this.baseUrl}/municipalities`, department);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/municipalities`);
  }

  getByDepartmentId(id: number) {
    return this.http.get(`${this.baseUrl}/municipalities/department/`+ id);
  }
}
