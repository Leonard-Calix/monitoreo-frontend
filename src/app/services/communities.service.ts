import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Community } from 'app/interfaces/Community.interface';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesService {

  private readonly baseUrl: string = environment.baseUrl;
  token = localStorage.getItem('token');

  headers = new HttpHeaders();

  constructor(private readonly http: HttpClient) {
    this.headers.set('Authorization', 'Bearer ' + this.token);
  }

  create(department: Community): Observable<any> {
    return this.http.post(`${this.baseUrl}/communities`, department);
  }

  getAll() {

    return this.http.get(`${this.baseUrl}/communities`, { headers: this.headers });
  }

  getByCommunityByMunicipalityId(id: number) {
    return this.http.get(`${this.baseUrl}/communities/municipality/` + id, { headers: this.headers });
  }


}
