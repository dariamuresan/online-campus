import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-admin-course-item',
  templateUrl: './admin-course-item.component.html',
  styleUrls: ['./admin-course-item.component.css']
})
export class AdminCourseItemComponent implements OnInit {
  @Input() course!: Course;
  
  constructor() { }

  ngOnInit(): void {
  }

}
