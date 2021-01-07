import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { EMPTY, forkJoin, Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { CourseService } from 'src/app/course.service';
import { EnrollmentService } from 'src/app/enrollment.service';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student-to-course',
  templateUrl: './add-student-to-course.component.html',
  styleUrls: ['./add-student-to-course.component.css']
})
export class AddStudentToCourseComponent implements OnInit {

  addForm!:FormGroup;
  id!:string;
  constructor(private enrollmentService:EnrollmentService, 
    private studentService:StudentService,
    private courseService:CourseService,
    private route:ActivatedRoute) { }

  private initForm():void{
    this.addForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.route.params
      .subscribe( 
        (params: Params) => 
        { 
          this.id = params['id'];
          
          this.addForm.reset(); 
        }
      );
  }

  onSubmit():void{

    if(this.addForm.valid){
      let grade = 0;
      forkJoin([this.studentService.getStudentByEmail(this.addForm.value['email']), this.courseService.getCourseWithId(this.id)]).pipe(
        switchMap(result => {
          if(result[0] && result[1])
            return this.enrollmentService.addEnrollment(result[0], result[1], grade);
          return EMPTY;
        })
      ).subscribe();
      
      //this.enrollmentService.addEnrollment(student, course, 0).subscribe();
    }
    
  }

}
