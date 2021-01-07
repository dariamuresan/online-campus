import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { StudentCoursesService } from '../../student-courses.service';

@Component({
  selector: 'app-student-course-item',
  templateUrl: './student-course-item.component.html',
  styleUrls: ['./student-course-item.component.css']
})
export class StudentCourseItemComponent implements OnInit {
  @Input() course!: Course;
  courseID!: string;

  constructor(private studentCoursesService : StudentCoursesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseID = this.course.id;
  }

}
