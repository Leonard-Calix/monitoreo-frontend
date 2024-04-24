import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'app/services/question.service';

@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css']
})
export class EditeComponent {

  formGrup: FormGroup;
  loading: boolean = true;

  constructor(
    private questionService: QuestionService, private readonly router: Router) {
  }

}
