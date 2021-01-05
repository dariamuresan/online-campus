import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  course!: Course;
  id!: number;
  editForm!:FormGroup;
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

  private initCourse():void{
    let currentCourse = this.teacherCoursesService.getCourseWithId(this.id);
    if(currentCourse != null){
      this.course = currentCourse;
    }
  }
  
  private init():void{
    let enrollmentsInCourse = this.enrollmentService.getEnrollmentsInCourse(this.id);
    this.initStudentArray(enrollmentsInCourse);
    this.initForm(enrollmentsInCourse);
    this.initCourse();
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.init();
    this.route.params
      .subscribe( 
        (params: Params) => 
        { 
          this.id = +params['id'];
          this.init();
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
        this.enrollmentService.updateGrade(currentStudent, this.course, currentGrade);
      }
      this.router.navigate(['/teacher-courses', this.id]);
    }
  }
}
