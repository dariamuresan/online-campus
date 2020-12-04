import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-teacher-course-list',
  templateUrl: './teacher-course-list.component.html',
  styleUrls: ['./teacher-course-list.component.css']
})
export class TeacherCourseListComponent implements OnInit {
  courses: Course[] = [
    new Course('Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
    new Course('Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
    new Course('Databases', 'Dan P.', 'SQL', 'DB')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
