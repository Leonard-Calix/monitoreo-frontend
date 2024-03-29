import { Component, OnInit } from '@angular/core';
import { Question } from 'app/interfaces/Question.interface';
import { QuestionService } from 'app/services/question.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  questions: Question[] = [];

  constructor( private readonly questionServide: QuestionService ){
    this.getAllQuestions()
  }

  ngOnInit(): void {
    
    this.questions;

  }

  getAllQuestions(){
    this.questionServide.getAll().subscribe((data:any) => console.log(data))
  }


}
