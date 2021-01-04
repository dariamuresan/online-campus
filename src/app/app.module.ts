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
import { AdminCourseListComponent } from './admin-courses/admin-course-list/admin-course-list.component';
import { AdminCourseItemComponent } from './admin-courses/admin-course-list/admin-course-item/admin-course-item.component';
import { AdminCourseEditComponent } from './admin-courses/admin-course-edit/admin-course-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentCoursesService } from './student-courses/student-courses.service';
import { TeacherCoursesService } from './teacher-courses/teacher-courses.service';
import { AdminCoursesService } from './admin-courses/admin-courses.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'student-courses', component: StudentCoursesComponent, children: [
    {path: '', component: StudentCourseListComponent},
    {path: ':id', component: StudentCourseDetailComponent},
  ]},
  {path: 'teacher-courses', component: TeacherCoursesComponent, children: [
    {path: '', component: TeacherCourseListComponent},
    {path: ':id', component: TeacherCourseDetailComponent},
    {path: ':id/edit', component: TeacherCoursesEditComponent}
  ]},
  {path: 'admin-courses', component: AdminCoursesComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StudentCoursesService, 
    TeacherCoursesService, 
    AdminCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
