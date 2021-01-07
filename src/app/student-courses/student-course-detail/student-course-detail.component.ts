import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Course } from 'src/app/shared/course.model';
import { StudentCoursesService } from '../student-courses.service';

@Component({
  selector: 'app-student-course-detail',
  templateUrl: './student-course-detail.component.html',
  styleUrls: ['./student-course-detail.component.css']
})
export class StudentCourseDetailComponent implements OnInit {
  course!: Course | null;
  courseID!: string;
  grade = 4;

  constructor(private studentCoursesService: StudentCoursesService, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe( 
      map((params: Params) => {
          return params['id'];
         }),
      tap((courseId:string) => {
        this.courseID = courseId;
      }),
      switchMap((courseId) => {
          return this.studentCoursesService.getCourseWithID(courseId);
        } 
      )
    ).subscribe((course) => {this.course = course;});
  }

}
