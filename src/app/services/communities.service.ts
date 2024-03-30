import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { Community } from 'app/interfaces/Community.interface';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  create(department: Community): Observable<any> {
    return this.http.post(`${this.baseUrl}/communities`, department);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/communities`);
  }


}
