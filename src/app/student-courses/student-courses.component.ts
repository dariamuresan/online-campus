import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {
  selectedCourse!: Course;
  
  constructor() { }

  ngOnInit(): void {
  }

}
