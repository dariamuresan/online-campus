import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseService } from "../course.service";
import { Course } from "../shared/course.model";
import { User } from "../shared/user.model";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AdminCourseGuard implements CanActivateChild{

    constructor(private authService:AuthService, private courseService:CourseService){}

    canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        
        
        if(!route.params['id'])
            return true;
        
        return this.courseService.getCourseWithId(route.params['id']).pipe(
            map((course: Course | null) => {
                if(!course)
                    return false;
                return true;
            }) 
        )
        
    }
}