import { UrlSegment } from "@angular/router";
import { AuthResponse } from "../authentication/auth-response.interface";

export class User{
    constructor(public email:string, public token:string, public expirationDate:Date, public id:string, public role?:string){

    }

    static createInstanceFromResponseAndRole(response:AuthResponse, role?:string){
        let expireDate = new Date();
        expireDate.setTime(expireDate.getTime() + (+response.expiresIn * 1000));
        return new User(response.email, response.idToken, expireDate, response.localId, role);
    }

    static createInstanceFromUser(user:User){
        return new User(user.email, user.token, user.expirationDate, user.id, user.role);
    }
}