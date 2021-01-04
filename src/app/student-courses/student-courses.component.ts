import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from '../shared/course.model';
import { StudentCoursesService } from './student-courses.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {
  selectedCourse!: Course;
  
  constructor(private studentCoursesService: StudentCoursesService) { }

  ngOnInit(): void {
    
  }

}
