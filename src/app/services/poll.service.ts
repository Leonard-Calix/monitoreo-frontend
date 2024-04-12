import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePoll } from 'app/interfaces/Poll.Interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  create(poll: CreatePoll): Observable<any> {
    return this.http.post(`${this.baseUrl}/polls`, poll);
  }

  bulkCreate(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/polls/bluk-create`, body);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/polls`);
  }
}
