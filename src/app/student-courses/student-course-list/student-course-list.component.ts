import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { StudentCoursesService } from '../student-courses.service';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {
  courses!: Course[];

  constructor(private studentCoursesService: StudentCoursesService) { }

  ngOnInit(): void {
    this.studentCoursesService.getCourses().subscribe(
      (courses:Course[]) => {
        this.courses = courses;
      }
    );
  }

}
