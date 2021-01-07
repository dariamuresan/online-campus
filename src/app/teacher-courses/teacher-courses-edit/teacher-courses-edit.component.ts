import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/enrollment.service';
import { Course } from 'src/app/shared/course.model';
import { Enrollment } from 'src/app/shared/enrollment.model';
import { Student } from 'src/app/shared/student.model';
import { TeacherCoursesService } from '../teacher-courses.service';

@Component({
  selector: 'app-teacher-courses-edit',
  templateUrl: './teacher-courses-edit.component.html',
  styleUrls: ['./teacher-courses-edit.component.css']
})
export class TeacherCoursesEditComponent implements OnInit {
  students: Student[] = [];
  course!: Course | null;
  id!: string;
  editForm!:FormGroup;
  loadingObservables:number = 0;
  constructor(private teacherCoursesService: TeacherCoursesService,
              private enrollmentService: EnrollmentService,
              private route: ActivatedRoute,
              private router:Router) { }
  
  private getFormArrayFromEnrollments(enrollmentsInCourse:Enrollment[]):FormArray{
    let enrollmentsFormArray:FormArray = new FormArray([]);
    
    for(let enrollment of enrollmentsInCourse){
      enrollmentsFormArray.push(new FormGroup({
        'grade':new FormControl(enrollment.grade, Validators.required)
      }));
    }
    return enrollmentsFormArray;
  }

  private initStudentArray(enrollmentsInCourse:Enrollment[]):void{
    this.students = enrollmentsInCourse.map(enrollment => enrollment.student);
  }


  private initForm(enrollmentsInCourse:Enrollment[]):void{
    
    this.editForm = new FormGroup({
      'grades': this.getFormArrayFromEnrollments(enrollmentsInCourse)
    })
  }
  
  private initObservable():Observable<Course | null>{
    return this.enrollmentService.getEnrollmentsInCourse(this.id).pipe(
      tap((enrollmentsInCourse:Enrollment[]) => {
        this.initStudentArray(enrollmentsInCourse);
        this.initForm(enrollmentsInCourse);
      }),
      switchMap(() => {
        return this.teacherCoursesService.getCourseWithId(this.id);
      })
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.pipe(
      map((params:Params) => {
        return params['id'];
      }),
      tap((id:string) => {
        this.id = id;
      }),
      switchMap((id:string) => {
        return this.initObservable();
      })
    ).subscribe(
        (course:Course | null) => { 
          this.course = course;
        }
      );
  }

  getGradeControls(){
    return (<FormArray>this.editForm.get('grades')).controls;
  }

  onClear(){
    this.editForm.reset();
  }

  onSubmit():void{
    if(this.editForm.valid){
      const gradesFormArray = this.editForm.value['grades'];
      for(let i = 0; i < gradesFormArray.length; i++){
        let currentGrade = gradesFormArray[i].grade;
        let currentStudent = this.students[i];
        if(this.course != null)
          this.enrollmentService.updateGrade(currentStudent, this.course, currentGrade).subscribe(() => {this.router.navigate(['/teacher-courses', this.id])});
      }
      
    }
  }
}
