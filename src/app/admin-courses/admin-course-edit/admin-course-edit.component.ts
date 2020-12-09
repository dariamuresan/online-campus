import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/teacher.model';

@Component({
  selector: 'app-admin-course-edit',
  templateUrl: './admin-course-edit.component.html',
  styleUrls: ['./admin-course-edit.component.css']
})
export class AdminCourseEditComponent implements OnInit {
  teachers: Teacher[] = [
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B."),
    new Teacher(1, "Alexandru", "B.")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
