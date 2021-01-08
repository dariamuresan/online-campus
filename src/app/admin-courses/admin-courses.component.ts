import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../shared/course.model';
import { AdminCoursesService } from './admin-courses.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courseSelected!: Course;

  constructor(private adminCoursesService: AdminCoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  onNewCourse() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onCreateAccount() {
    this.router.navigate(['add-user'], {relativeTo: this.route});
  }

}
