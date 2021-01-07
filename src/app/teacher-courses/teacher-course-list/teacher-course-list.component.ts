import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { TeacherCoursesService } from '../teacher-courses.service';

@Component({
  selector: 'app-teacher-course-list',
  templateUrl: './teacher-course-list.component.html',
  styleUrls: ['./teacher-course-list.component.css']
})
export class TeacherCourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private teacherCoursesService: TeacherCoursesService) { }

  ngOnInit(): void {
    this.teacherCoursesService.getCourses().subscribe(
      (courses) => {
        this.courses = courses;
      }
    );
  }

}
