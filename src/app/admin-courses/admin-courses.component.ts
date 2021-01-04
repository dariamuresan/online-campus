import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { AdminCoursesService } from './admin-courses.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courseSelected!: Course;

  constructor(private adminCoursesService: AdminCoursesService) { }

  ngOnInit(): void {
    this.adminCoursesService.selectedCourse.subscribe( (course: Course) => {this.courseSelected = course});
  }

}
