import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCourseEditComponent } from './admin-courses/admin-course-edit/admin-course-edit.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminNewCourseComponent } from './admin-courses/admin-new-course/admin-new-course.component';
import { AdminNewUserComponent } from './admin-courses/admin-new-user/admin-new-user.component';
import { AdminCourseGuard } from './authentication/admin-course-guard.service';
import { AuthGuardService } from './authentication/auth-guard.service';
import { LoginComponent } from './authentication/login/login.component';
import { StudentCourseGuard } from './authentication/student-course-guard.service';
import { TeacherCourseGuard } from './authentication/teacher-course-guard.service';
import { CourseNotSelectedComponent } from './course-not-selected/course-not-selected.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentCourseDetailComponent } from './student-courses/student-course-detail/student-course-detail.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AddStudentToCourseComponent } from './teacher-courses/add-student-to-course/add-student-to-course.component';
import { TeacherCourseDetailComponent } from './teacher-courses/teacher-course-detail/teacher-course-detail.component';
import { TeacherCourseListComponent } from './teacher-courses/teacher-course-list/teacher-course-list.component';
import { TeacherCoursesEditComponent } from './teacher-courses/teacher-courses-edit/teacher-courses-edit.component';
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'student-courses', canActivate:[AuthGuardService], canActivateChild:[StudentCourseGuard], component: StudentCoursesComponent, children: [
    {path: '', component: CourseNotSelectedComponent},
    {path: ':id', component: StudentCourseDetailComponent}
  ]},
  {path: 'teacher-courses', canActivate:[AuthGuardService], canActivateChild:[TeacherCourseGuard], component: TeacherCoursesComponent, children: [
    {path: '', component: TeacherCourseListComponent},
    {path: ':id', component: TeacherCourseDetailComponent},
    {path: ':id/edit', component: TeacherCoursesEditComponent},
    {path: ':id/new', component: AddStudentToCourseComponent}
  ]},
  {path: 'admin-courses', canActivate:[AuthGuardService], canActivateChild:[AdminCourseGuard], component: AdminCoursesComponent, children: [
    {path: '', component: CourseNotSelectedComponent},
    {path: 'new', component: AdminNewCourseComponent},
    {path: 'add-user', component: AdminNewUserComponent},
    {path: ':id', component: AdminCourseEditComponent}
    
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
