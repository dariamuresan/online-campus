import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';
import { StudentCoursesService } from './student-courses.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css'],
  providers: [StudentCoursesService]
})
export class StudentCoursesComponent implements OnInit {
  selectedCourse!: Course;
  
  constructor(private studentCoursesService: StudentCoursesService) { }

  ngOnInit(): void {
    this.studentCoursesService.courseSelected
      .subscribe((course: Course) => {this.selectedCourse = course})
  }

}
