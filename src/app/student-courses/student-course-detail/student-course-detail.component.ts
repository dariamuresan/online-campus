import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
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
  grade!:number;

  constructor(private studentCoursesService: StudentCoursesService, 
              private route: ActivatedRoute,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.route.params.pipe( 
      map((params: Params) => {
          return params['id'];
         }),
      tap((courseId:string) => {
        this.courseID = courseId;
      }),
      switchMap((courseId) => {
          const currentUserId = this.authService.getCurrentUserId();
          let gradeObserver:any;
          if(!currentUserId)
            gradeObserver = of(0);
          else
            gradeObserver = this.studentCoursesService.getGrade(currentUserId, this.courseID);
          return forkJoin([this.studentCoursesService.getCourseWithID(courseId), gradeObserver]);
        } 
      )
    ).subscribe(
      (result:any[]) => {
        this.course = result[0];
        this.grade = result[1];
    });
  }

}
