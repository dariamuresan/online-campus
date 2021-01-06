import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/shared/course.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.css']
})
export class AdminCourseListComponent implements OnInit, OnDestroy {
  courses: Course[] = [];

  addedCourseObserver!:Subscription;

  constructor(private adminCoursesService: AdminCoursesService) { }

  ngOnInit(): void {
    this.courses = this.adminCoursesService.getCourses();
    this.addedCourseObserver = 
      this.adminCoursesService.addedCourse
        .subscribe(() => {
          this.courses = this.adminCoursesService.getCourses();
        });
  }

  ngOnDestroy():void{
    this.addedCourseObserver.unsubscribe();
  }

}
