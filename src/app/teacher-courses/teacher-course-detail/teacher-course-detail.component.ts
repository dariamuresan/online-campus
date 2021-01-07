import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Course } from 'src/app/shared/course.model';
import { Enrollment } from 'src/app/shared/enrollment.model';
import { Student } from 'src/app/shared/student.model';
import { TeacherCoursesService } from '../teacher-courses.service';

@Component({
  selector: 'app-teacher-course-detail',
  templateUrl: './teacher-course-detail.component.html',
  styleUrls: ['./teacher-course-detail.component.css']
})
export class TeacherCourseDetailComponent implements OnInit {
  enrollments: Enrollment[] = [];
  id!: string;

  course!: Course | null;

  columnsToDisplay = ['name'];

  constructor(private teacherCoursesService: TeacherCoursesService,
              private enrollmentService:EnrollmentService,
              private route: ActivatedRoute,
              private router: Router) { }

  private observeRouteForCourse():void{
    this.route.params.pipe(
      map((params:Params) => {
        return params['id'];
      }),
      tap((courseId:string) => {
        this.id = courseId;
      }),
      switchMap((courseId:string) => {
        return forkJoin([this.teacherCoursesService.getCourseWithId(courseId), this.enrollmentService.getEnrollmentsInCourse(courseId)]);
      })
    ).subscribe( 
       (result:any[]) => {
         this.course = result[0];
         this.enrollments = result[1];
       }
    );
  }
  

  ngOnInit(): void {
    this.observeRouteForCourse();
    //this.enrollments = this.enrollmentService.getEnrollmentsInCourse(this.id);
  }

  onEditCourse() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
