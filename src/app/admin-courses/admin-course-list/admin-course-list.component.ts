import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.css']
})
export class AdminCourseListComponent implements OnInit {
  courses: Course[] = [
    new Course('Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
    new Course('Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
    new Course('Databases', 'Dan P.', 'SQL', 'DB')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
