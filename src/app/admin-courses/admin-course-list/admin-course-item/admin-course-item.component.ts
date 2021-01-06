import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { AdminCoursesService } from '../../admin-courses.service';

@Component({
  selector: 'app-admin-course-item',
  templateUrl: './admin-course-item.component.html',
  styleUrls: ['./admin-course-item.component.css']
})
export class AdminCourseItemComponent implements OnInit {
  @Input() course!: Course;
  courseID!: number;
  
  constructor(private adminCoursesService: AdminCoursesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseID = this.course.id;
  }

}
