import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { AdminCoursesService } from '../../admin-courses.service';

@Component({
  selector: 'app-admin-course-item',
  templateUrl: './admin-course-item.component.html',
  styleUrls: ['./admin-course-item.component.css']
})
export class AdminCourseItemComponent implements OnInit {
  @Input() course!: Course;
  
  constructor(private adminCoursesService: AdminCoursesService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.adminCoursesService.selectedCourse.emit(this.course);
  }

}
