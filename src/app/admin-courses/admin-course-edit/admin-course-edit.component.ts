import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EMPTY, forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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

  courseId!:string;
  course!:Course;

  editForm:FormGroup | null = null;

  constructor(private adminCoursesService: AdminCoursesService, private router:Router, private route:ActivatedRoute) { }

  private initForm():void{
    console.log(this.course);
    this.editForm = new FormGroup({
      'name': new FormControl(this.course.name, Validators.required),
      'abbreviation': new FormControl(this.course.abreviation, Validators.required),
      'teacher': new FormControl(this.course.teacher.id, Validators.required),
      'description': new FormControl(this.course.description)
    });
  }
  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    //this.course = this.adminCoursesService.getCourseWithId(this.courseId);
    this.route.params.pipe(
      map((params:Params) => {
        return params['id'];
      }),
      tap((id:string) => {
        this.courseId = id;
      }),
      switchMap(() => {
        return forkJoin([this.adminCoursesService.getCourseWithId(this.courseId), this.adminCoursesService.getTeachers()]);
      })
    ).subscribe(
      (result) => {
        if(result[0] != null)
          this.course = result[0];
        this.teachers = result[1];
        this.initForm();
      }
    );
    
    
  }

  onSubmit():void{
    if(this.editForm && this.editForm.valid){
      const name = this.editForm.value['name'];
      const teacherId = this.editForm.value['teacher'];
      const description = this.editForm.value['description'];
      const abreviation = this.editForm.value['abbreviation'];
      this.adminCoursesService.getTeacherById(teacherId).pipe(
        map((teacher:Teacher | null) => {
          if(!teacher)
            return null;
          return new Course(this.courseId, 
            name,
            teacher,
            description,
            abreviation
          );
        }),
        switchMap((course:Course | null) => {
          if(course)
            return this.adminCoursesService.updateCourse(this.courseId, course);
          return EMPTY;    
        }
      )).subscribe(() => {
        this.router.navigate(['/admin-courses']);
      })
    }     
  }

  onDeleteCourse():void{
    this.adminCoursesService.deleteCourse(this.courseId).subscribe();
    this.router.navigate(['/admin-courses']);
  }

  onCancel():void{
    this.router.navigate(['/admin-courses']);
  }
}
