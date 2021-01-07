import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StartingRouteRetriever } from "../shared/starting-route";
import { User } from "../shared/user.model";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuardService implements CanActivate{
    constructor(private authService:AuthService){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>{
        const isAuthenticated = this.authService.isAuthenticated();
        const user:User | null = this.authService.getCurrentUser();

        if(!user || !user.role)
            return false;
        const startRoute:string = route.url[0].path;
        
        const allowedStartingRoute = new StartingRouteRetriever(user.role).getStartingRoute();

        const startRouteWithSlash = `/${startRoute}`;
        return startRouteWithSlash === allowedStartingRoute;
    }
}