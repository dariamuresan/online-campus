import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent } from './header/header.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { StudentCourseListComponent } from './student-courses/student-course-list/student-course-list.component';
import { StudentCourseItemComponent } from './student-courses/student-course-list/student-course-item/student-course-item.component';
import { StudentCourseDetailComponent } from './student-courses/student-course-detail/student-course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentCoursesComponent,
    StudentCourseListComponent,
    StudentCourseItemComponent,
    StudentCourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
