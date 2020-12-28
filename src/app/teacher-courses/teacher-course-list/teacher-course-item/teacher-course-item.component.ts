import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-teacher-course-item',
  templateUrl: './teacher-course-item.component.html',
  styleUrls: ['./teacher-course-item.component.css']
})
export class TeacherCourseItemComponent implements OnInit {
  @Input() course!: Course;
  
  constructor() { }

  ngOnInit(): void {
  }

}
