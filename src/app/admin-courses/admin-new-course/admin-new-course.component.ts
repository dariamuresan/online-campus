import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { Teacher } from 'src/app/shared/teacher.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-new-course',
  templateUrl: './admin-new-course.component.html',
  styleUrls: ['./admin-new-course.component.css']
})
export class AdminNewCourseComponent implements OnInit {
  teachers!: Teacher[];

  addForm!:FormGroup;

  constructor(private adminCoursesService: AdminCoursesService, private router:Router) { }

  private initForm():void{
    this.addForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'abbreviation': new FormControl(null, Validators.required),
      'teacher': new FormControl(null, Validators.required),
      'description': new FormControl(null)
    });
  }
  ngOnInit(): void {
    this.initForm();
    this.teachers = this.adminCoursesService.getTeachers();
  }



  onSubmit():void{
    if(this.addForm.valid){
      const course = new Course(this.adminCoursesService.getNextId(), 
        this.addForm.value['name'],
        this.adminCoursesService.getTeacherById(this.addForm.value['teacher']),
        this.addForm.value['description'],
        this.addForm.value['abbreviation']
      );
      this.adminCoursesService.addCourse(course);
    }     
  }

  onCancel():void{
    this.router.navigate(['/admin-courses']);
  }

}
