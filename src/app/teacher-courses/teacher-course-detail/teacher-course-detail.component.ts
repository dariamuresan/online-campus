import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  id!: number;

  course!: Course;

  columnsToDisplay = ['name'];

  constructor(private teacherCoursesService: TeacherCoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( (params: Params) => { this.id = +params['id']; this.course = this.teacherCoursesService.getCourseWithId(this.id)})

    this.students = this.teacherCoursesService.getStudents();
  }

  onEditCourse() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
