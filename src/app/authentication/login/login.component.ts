import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StartingRouteRetriever } from 'src/app/shared/starting-route';
import { User } from 'src/app/shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  error!:string | null;

  constructor(private authService:AuthService, private router:Router) { }

  private initForm():void{
    this.loginForm = new FormGroup({
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'password':new FormControl(null, Validators.required)
    })
  }

  private handleAuthenticationResponseError(error:any){
    console.log(error);
    if(!error.error || !error.error.error)
        this.error = "Unknown error";
    else
        this.error = error.error.error.message;
    console.log(this.error);
  }

  private handleAuthenticationSuccess(user:User){
    if(!user.role)
      return;
    const startingRouteRetriever = new StartingRouteRetriever(user.role);
    this.router.navigate([startingRouteRetriever.getStartingRoute()]);
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  onSubmit():void{
    if(this.loginForm.valid){
      const email = this.loginForm.value['email'];
      const password = this.loginForm.value['password'];
      this.authService.login(email, password).subscribe(
        {
          next:this.handleAuthenticationSuccess.bind(this),          
          error:this.handleAuthenticationResponseError.bind(this)
        }
      );
    }
    
  }

  onHandleError():void{
    this.error = null;
  }

}
