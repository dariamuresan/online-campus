import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-student-course-item',
  templateUrl: './student-course-item.component.html',
  styleUrls: ['./student-course-item.component.css']
})
export class StudentCourseItemComponent implements OnInit {
  @Input() course!: Course;
  @Output() selectedCourse = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.selectedCourse.emit();
  }

}
