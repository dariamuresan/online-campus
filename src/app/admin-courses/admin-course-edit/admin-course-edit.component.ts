import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { Teacher } from 'src/app/shared/teacher.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-course-edit',
  templateUrl: './admin-course-edit.component.html',
  styleUrls: ['./admin-course-edit.component.css']
})
export class AdminCourseEditComponent implements OnInit {
  teachers!: Teacher[];

  courseId!:number;
  course!:Course;

  editForm!:FormGroup;

  constructor(private adminCoursesService: AdminCoursesService, private router:Router, private route:ActivatedRoute) { }

  private initForm():void{
    this.editForm = new FormGroup({
      'name': new FormControl(this.course.name, Validators.required),
      'abbreviation': new FormControl(this.course.abreviation, Validators.required),
      'teacher': new FormControl(this.course.teacher.id, Validators.required),
      'description': new FormControl(this.course.description)
    });
  }
  ngOnInit(): void {
    this.courseId = +this.route.snapshot.params['id'];
    this.course = this.adminCoursesService.getCourseWithId(this.courseId);
    this.route.params.subscribe(
      (params:Params) => {
        this.courseId = +params['id'];
        this.course = this.adminCoursesService.getCourseWithId(this.courseId);
        this.initForm();
      }
    );
    this.initForm();
    this.teachers = this.adminCoursesService.getTeachers();
  }

  onSubmit():void{
    if(this.editForm.valid){
      const course = new Course(this.courseId, 
        this.editForm.value['name'],
        this.adminCoursesService.getTeacherById(this.editForm.value['teacher']),
        this.editForm.value['description'],
        this.editForm.value['abbreviation']
      );
      this.adminCoursesService.updateCourse(this.courseId, course);
    }     
  }

  onDeleteCourse():void{
    this.adminCoursesService.deleteCourse(this.courseId);
    this.router.navigate(['/admin-courses']);
  }

  onCancel():void{
    this.router.navigate(['/admin-courses']);
  }
}
