import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { Student } from 'src/app/shared/student.model';
import { TeacherCoursesService } from '../teacher-courses.service';

@Component({
  selector: 'app-teacher-course-detail',
  templateUrl: './teacher-course-detail.component.html',
  styleUrls: ['./teacher-course-detail.component.css']
})
export class TeacherCourseDetailComponent implements OnInit {
  students: Student[] = [];

  @Input() course!: Course;

  columnsToDisplay = ['name'];

  constructor(private teacherCoursesService: TeacherCoursesService) { }

  ngOnInit(): void {
    this.students = this.teacherCoursesService.getStudents();
  }

}
