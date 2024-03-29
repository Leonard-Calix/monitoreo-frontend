import { Component, OnInit } from '@angular/core';
import { Department } from 'app/interfaces/Department.interface';
import { DepartmentService } from 'app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departements: Department[] = [];


  constructor(private readonly deparmentService: DepartmentService) {

  }
  ngOnInit(): void {
    this.getAllDepartment();
  }

  getAllDepartment() {
    this.deparmentService.getAll().subscribe((data: any) => console.log(data));
  }

}
