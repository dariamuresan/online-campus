import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-to-course',
  templateUrl: './add-student-to-course.component.html',
  styleUrls: ['./add-student-to-course.component.css']
})
export class AddStudentToCourseComponent implements OnInit {

  addForm!:FormGroup;
  constructor() { }

  private initForm():void{
    this.addForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit():void{
    
  }

}
