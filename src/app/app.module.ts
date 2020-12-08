import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent } from './header/header.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentCourseListComponent } from './student-courses/student-course-list/student-course-list.component';
import { StudentCourseItemComponent } from './student-courses/student-course-list/student-course-item/student-course-item.component';
import { StudentCourseDetailComponent } from './student-courses/student-course-detail/student-course-detail.component';
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component';
import { TeacherCourseListComponent } from './teacher-courses/teacher-course-list/teacher-course-list.component';
import { TeacherCourseDetailComponent } from './teacher-courses/teacher-course-detail/teacher-course-detail.component';
import { TeacherCourseItemComponent } from './teacher-courses/teacher-course-list/teacher-course-item/teacher-course-item.component';
import { TeacherCoursesEditComponent } from './teacher-courses/teacher-courses-edit/teacher-courses-edit.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentCoursesComponent,
    StudentCourseListComponent,
    StudentCourseItemComponent,
    StudentCourseDetailComponent,
    TeacherCoursesComponent,
    TeacherCourseListComponent,
    TeacherCourseDetailComponent,
    TeacherCourseItemComponent,
    TeacherCoursesEditComponent,
    AdminCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
