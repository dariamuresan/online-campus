import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { TeacherCoursesService } from './teacher-courses.service';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css'],
  providers: [TeacherCoursesService]
})
export class TeacherCoursesComponent implements OnInit {
  selectedCourse!: Course;

  constructor(private teacherCoursesService: TeacherCoursesService) { }

  ngOnInit(): void {
    this.teacherCoursesService.selectedCourse.subscribe( (course: Course) => { this.selectedCourse = course});
  }

}
