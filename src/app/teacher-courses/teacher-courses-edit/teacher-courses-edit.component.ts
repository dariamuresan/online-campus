import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { Student } from 'src/app/shared/student.model';
import { TeacherCoursesService } from '../teacher-courses.service';

@Component({
  selector: 'app-teacher-courses-edit',
  templateUrl: './teacher-courses-edit.component.html',
  styleUrls: ['./teacher-courses-edit.component.css']
})
export class TeacherCoursesEditComponent implements OnInit {
  students: Student[] = [];
  course!: Course;
  id!: number;

  constructor(private teacherCoursesService: TeacherCoursesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( (params: Params) => { this.id = +params['id']; this.course = this.teacherCoursesService.getCourseWithId(this.id)})

    this.students = this.teacherCoursesService.getStudents(); // students with course id THIS.ID
  }

}
