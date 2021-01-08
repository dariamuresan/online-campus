import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { User } from "../shared/user.model";
import { StudentService } from "../student.service";
import { TeacherService } from "../teacher.service";
import { UserService } from "../user.service";
import { AuthResponse } from "./auth-response.interface";


@Injectable({providedIn:'root'})
export class AuthService{
    public user:BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

    private currentUser:User | null = null;

    private expirationLogoutTimer:any;
    /*private observeAuthenticationUser():void{
        this.user.subscribe((user) => {
            this.currentUser = user;
        });
    }*/


    constructor(private httpClient:HttpClient, private userService:UserService){
        //this.observeAuthenticationUser();
    }

    getCurrentUser():User | null{
        return this.currentUser;
    }

    getCurrentUserId():string | null{
        if(!this.currentUser)
            return null;
        return this.currentUser.id;
    }

    isAuthenticated():boolean{
        return !!this.currentUser;
    }

    signup(email:string, password:string, role:string):Observable<User>{
        return this.httpClient.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXrRBAC773AweR4AVZrV6QRVPsabTP2NQ", 
        {
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(
            map((authResponse:AuthResponse) => {
                return User.createInstanceFromResponseAndRole(authResponse, role);
            }),
            switchMap((user:User) => {
                return this.userService.addUser(user);
            })
        );
    }

    login(email:string, password:string):Observable<User>{
        return this.httpClient.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXrRBAC773AweR4AVZrV6QRVPsabTP2NQ",
        {
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(
            map((authResponse:AuthResponse) => {
                return User.createInstanceFromResponseAndRole(authResponse);
            }),
            tap((user:User) => {
                this.setLogoutTimer(user.expirationDate.getTime() - new Date().getTime());
                this.currentUser = user;
            }),
            switchMap((user:User) => {
                return this.userService.findUserById(user.id)
            }),
            tap((user:User) => {
                if(this.currentUser)
                    this.currentUser.role = user.role;
                this.user.next(this.currentUser);
                
            })
        );
    }

    private setLogoutTimer(expirationTimeInMiliseconds:number):void{
        
        this.expirationLogoutTimer = setTimeout(() => {
            this.logout();
        }, expirationTimeInMiliseconds); 
    }

    logout():void{
        //this.expirationLogoutTimer.clear();
        this.currentUser = null;
        this.user.next(null);
    }

    autoLogout(){

    }

}