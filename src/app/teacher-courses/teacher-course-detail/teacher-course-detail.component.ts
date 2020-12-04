import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-teacher-course-detail',
  templateUrl: './teacher-course-detail.component.html',
  styleUrls: ['./teacher-course-detail.component.css']
})
export class TeacherCourseDetailComponent implements OnInit {
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
