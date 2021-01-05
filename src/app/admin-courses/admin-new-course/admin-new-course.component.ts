import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-new-course',
  templateUrl: './admin-new-course.component.html',
  styleUrls: ['./admin-new-course.component.css']
})
export class AdminNewCourseComponent implements OnInit {
  teachers!: Teacher[];

  constructor(private adminCoursesService: AdminCoursesService) { }

  ngOnInit(): void {
    this.teachers = this.adminCoursesService.getTeachers();
  }

}
