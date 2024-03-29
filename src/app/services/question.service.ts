import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'app/interfaces/Department.interface';
import { Question } from 'app/interfaces/Question.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private readonly http: HttpClient) { }

  create(question: Question): Observable<any> {
    return this.http.post(`${this.baseUrl}/questions`, question);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/questions`);
  }
}
