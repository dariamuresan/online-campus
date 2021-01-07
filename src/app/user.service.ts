import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "./shared/user.model";

@Injectable({providedIn:'root'})
export class UserService{
    constructor(private httpClient:HttpClient){}

    addUser(user:User):Observable<any>{
        const userId:string = user.id;
        console.log(user);
        return this.httpClient.put(`https://online-campus-cc35b-default-rtdb.firebaseio.com/users/${userId}.json`, user);
    }

    findUserById(id:string):Observable<User>{
        return this.httpClient.get<User>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/users/${id}.json`).pipe(
            map((response:User) => {
                return User.createInstanceFromUser(response);
            })
        );
    }
}