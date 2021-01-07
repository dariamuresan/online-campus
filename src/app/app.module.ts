import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';

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
import { AdminCourseListComponent } from './admin-courses/admin-course-list/admin-course-list.component';
import { AdminCourseItemComponent } from './admin-courses/admin-course-list/admin-course-item/admin-course-item.component';
import { AdminCourseEditComponent } from './admin-courses/admin-course-edit/admin-course-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentCoursesService } from './student-courses/student-courses.service';
import { TeacherCoursesService } from './teacher-courses/teacher-courses.service';
import { AdminCoursesService } from './admin-courses/admin-courses.service';
import { CourseNotSelectedComponent } from './course-not-selected/course-not-selected.component';
import { AddStudentToCourseComponent } from './teacher-courses/add-student-to-course/add-student-to-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminNewCourseComponent } from './admin-courses/admin-new-course/admin-new-course.component';
import { LoginComponent } from './authentication/login/login.component';
import { HelloUserComponent } from './hello-user/hello-user.component';

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
    AdminCoursesComponent,
    AdminCourseListComponent,
    AdminCourseItemComponent,
    AdminCourseEditComponent,
    HomeComponent,
    PageNotFoundComponent,
    CourseNotSelectedComponent,
    AdminNewCourseComponent,
    LoginComponent,
    HelloUserComponent,
    AddStudentToCourseComponent,
    AdminNewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    StudentCoursesService, 
    TeacherCoursesService, 
    AdminCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
