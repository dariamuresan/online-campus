import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { Course } from 'src/app/shared/course.model';
import { User } from 'src/app/shared/user.model';
import { StudentCoursesService } from '../student-courses.service';

@Component({
  selector: 'app-student-course-list',
  templateUrl: './student-course-list.component.html',
  styleUrls: ['./student-course-list.component.css']
})
export class StudentCourseListComponent implements OnInit {
  courses!: Course[];

  constructor(private studentCoursesService: StudentCoursesService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user.pipe(
      switchMap((user:User | null) => {
        if(!user)
          return EMPTY;
        
        return this.studentCoursesService.getCoursesForStudent(user.id);
      })
    ).subscribe();
  }

}
