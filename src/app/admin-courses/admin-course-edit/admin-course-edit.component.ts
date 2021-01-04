import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { Teacher } from 'src/app/shared/teacher.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-course-edit',
  templateUrl: './admin-course-edit.component.html',
  styleUrls: ['./admin-course-edit.component.css']
})
export class AdminCourseEditComponent implements OnInit {
  course!: Course;
  courseID!: number;
  teachers: Teacher[] = [];

  constructor(private adminCoursesService: AdminCoursesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teachers = this.adminCoursesService.getTeachers();

    this.route.params.subscribe( (params: Params) => {
      this.courseID = +params['id'];
      this.course = this.adminCoursesService.getCourseWithId(this.courseID);
    })
  }

}
