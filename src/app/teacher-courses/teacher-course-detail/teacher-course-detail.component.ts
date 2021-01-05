import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  id!: number;

  course!: Course;

  columnsToDisplay = ['name'];

  constructor(private teacherCoursesService: TeacherCoursesService,
              private enrollmentService:EnrollmentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( 
        (params: Params) => 
        { 
          this.id = +params['id'];
          
          let currentCourse = this.teacherCoursesService.getCourseWithId(this.id);
          if(currentCourse != null){
            this.course = currentCourse;
          }
           
        }
      );

    this.enrollments = this.enrollmentService.getEnrollmentsInCourse(this.id);
  }

  onEditCourse() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
