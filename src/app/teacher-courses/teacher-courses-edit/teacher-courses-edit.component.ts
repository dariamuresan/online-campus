import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-teacher-courses-edit',
  templateUrl: './teacher-courses-edit.component.html',
  styleUrls: ['./teacher-courses-edit.component.css']
})
export class TeacherCoursesEditComponent implements OnInit {
  students: Student[] = [
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M."),
    new Student(1, "Daria", "M.")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
