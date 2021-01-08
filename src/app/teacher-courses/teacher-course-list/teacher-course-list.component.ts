import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { Course } from 'src/app/shared/course.model';
import { User } from 'src/app/shared/user.model';
import { TeacherCoursesService } from '../teacher-courses.service';

@Component({
  selector: 'app-teacher-course-list',
  templateUrl: './teacher-course-list.component.html',
  styleUrls: ['./teacher-course-list.component.css']
})
export class TeacherCourseListComponent implements OnInit {
  courses: Course[] = [];

  currentUser!:User | null;

  constructor(private teacherCoursesService: TeacherCoursesService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user.pipe(
      switchMap((user:User | null) => {
        if(!user)
          return EMPTY;
        this.currentUser = user;
        console.log(user.id);
        return this.teacherCoursesService.getCoursesByTeacher(user.id);
      })
    ).subscribe(
      (courses:Course[]) => {
        this.courses = courses;
      }
       
    );
  }

}
