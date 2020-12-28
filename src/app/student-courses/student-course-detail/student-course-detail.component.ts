import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-student-course-detail',
  templateUrl: './student-course-detail.component.html',
  styleUrls: ['./student-course-detail.component.css']
})
export class StudentCourseDetailComponent implements OnInit {
  @Input() course!: Course;
  grade = 4;

  constructor() { }

  ngOnInit(): void {
  }

}
