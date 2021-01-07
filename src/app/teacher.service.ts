import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Teacher } from "./shared/teacher.model";

@Injectable({providedIn:'root'})
export class TeacherService{
    constructor(private httpClient:HttpClient){}

    getTeacherById(id:string):Observable<Teacher | null>{
        return this.httpClient.get<Teacher>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/teachers/${id}.json`).pipe(
            map((teachersResponse) => {
                return Teacher.getTeacherInstance(teachersResponse);
            })
        );
    }

    getTeachers():Observable<Teacher[]>{
        return this.httpClient.get<{[key:string] : Teacher}>('https://online-campus-cc35b-default-rtdb.firebaseio.com/teachers.json').pipe(
            map(teachers => {
                if(!teachers)
                    return [];
                const result:Teacher[] = [];
                for(const key in teachers){
                    result.push(Teacher.getTeacherInstance(teachers[key]));
                }
                
                return result;
            })
        );
    }
}