import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {
  courses: Course[] = [
    new Course('Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
    new Course('Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
    new Course('Databases', 'Dan P.', 'SQL', 'DB')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
