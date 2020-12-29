import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { Teacher } from 'src/app/shared/teacher.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-course-edit',
  templateUrl: './admin-course-edit.component.html',
  styleUrls: ['./admin-course-edit.component.css']
})
export class AdminCourseEditComponent implements OnInit {
  teachers: Teacher[] = [];

  @Input() course!: Course;

  constructor(private adminCoursesService: AdminCoursesService) { }

  ngOnInit(): void {
    this.teachers = this.adminCoursesService.getTeachers();
  }

}
