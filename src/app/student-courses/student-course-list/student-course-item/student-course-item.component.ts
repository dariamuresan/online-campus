import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { StudentCoursesService } from '../../student-courses.service';

@Component({
  selector: 'app-student-course-item',
  templateUrl: './student-course-item.component.html',
  styleUrls: ['./student-course-item.component.css']
})
export class StudentCourseItemComponent implements OnInit {
  @Input() course!: Course;

  constructor(private studentCoursesService : StudentCoursesService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.studentCoursesService.courseSelected.emit(this.course);
  }

}
