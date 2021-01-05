import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.css']
})
export class AdminCourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private adminCoursesService: AdminCoursesService) { }

  ngOnInit(): void {
    this.courses = this.adminCoursesService.getCourses();
  }

}
