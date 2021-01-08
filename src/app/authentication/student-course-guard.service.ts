import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseService } from "../course.service";
import { EnrollmentService } from "../enrollment.service";
import { Course } from "../shared/course.model";
import { User } from "../shared/user.model";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class StudentCourseGuard implements CanActivateChild{

    constructor(private authService:AuthService, private enrollmentService:EnrollmentService){}

    canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        
        const currentUser:User | null = this.authService.getCurrentUser();
        if(!currentUser)
            return false;
        if(!route.params['id'])
            return true;
        
        return this.enrollmentService.existsEnrollmentByStudentIdAndCourseId(currentUser.id, route.params['id']);
        
    }
}