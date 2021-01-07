import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { RandomPasswordGenerator } from 'src/app/shared/random-password-generator';
import { Student } from 'src/app/shared/student.model';
import { Teacher } from 'src/app/shared/teacher.model';
import { AdminCoursesService } from '../admin-courses.service';

@Component({
  selector: 'app-admin-new-user',
  templateUrl: './admin-new-user.component.html',
  styleUrls: ['./admin-new-user.component.css']
})
export class AdminNewUserComponent implements OnInit {

  error!:string | null;

  addForm!:FormGroup;

  randomPasswordGenerator = new RandomPasswordGenerator();

  constructor(private adminCoursesService:AdminCoursesService, private router:Router) { }

  private initForm():void{
    this.addForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'role': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required)
    });
  }

  private handleAuthenticationResponseError(error:any){
    
    if(!error.error || !error.error.error)
        this.error = "Unknown error";
    else
        this.error = error.error.error.message;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit():void{
    if(this.addForm.valid){
      const email = this.addForm.value['email'];
      const password = this.addForm.value['password'];
      const role = this.addForm.value['role'];
      const firstName = this.addForm.value['firstName'];
      const lastName = this.addForm.value['lastName'];
      if(role == 'teacher'){
        const teacher = new Teacher('0', firstName, lastName, email);
        this.adminCoursesService.signupTeacher(email, password, role, teacher).subscribe({
          next:(response) => {this.router.navigate(['/admin-courses']);},
          error: this.handleAuthenticationResponseError.bind(this)
        });
      }
      
      else{
        const student = new Student('0', firstName, lastName, email);
        this.adminCoursesService.signupStudent(email, password, role, student).subscribe({
          next:(response) => {this.router.navigate(['/admin-courses']);},
          error: this.handleAuthenticationResponseError.bind(this)
        });
      }
    }
  }

  onHandleError():void{
    this.error = null;
  }

  generatePassword():void{
    this.addForm.patchValue({
      'password': this.randomPasswordGenerator.generatePassword(10)
    });
  }

}
