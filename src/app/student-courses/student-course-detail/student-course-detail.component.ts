import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { StudentCoursesService } from '../student-courses.service';

@Component({
  selector: 'app-student-course-detail',
  templateUrl: './student-course-detail.component.html',
  styleUrls: ['./student-course-detail.component.css']
})
export class StudentCourseDetailComponent implements OnInit {
  course!: Course;
  courseID!: number;
  grade = 4;

  constructor(private studentCoursesService: StudentCoursesService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.courseID = params['id']
      this.course = this.studentCoursesService.getCourseWithID(this.courseID)} );
  }

}
