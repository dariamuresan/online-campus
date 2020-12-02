import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent } from './header/header.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
