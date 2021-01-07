import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {take, exhaustMap} from 'rxjs/operators';
import { User } from '../shared/user.model';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

    constructor(private authService:AuthService){}

    intercept(request:HttpRequest<any>, next:HttpHandler){
        const user:User | null = this.authService.getCurrentUser();
        if(!user)
            return next.handle(request);
        const modifiedRequest = request.clone({
            params:new HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedRequest);
    }
}