import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Student } from "./shared/student.model";

@Injectable({providedIn:'root'})
export class StudentService{
    
    constructor(private httpClient:HttpClient){}
    
    getStudents():Observable<Student[]> {
        return this.httpClient.get<{[key:string] : Student}>('https://online-campus-cc35b-default-rtdb.firebaseio.com/students.json').pipe(
            map(students => {
                if(!students)
                    return [];
                const result:Student[] = [];
                for(const key in students){
                    result.push(Student.getStudentInstance(students[key]));
                }
                return result;
            })
        );
    }
    addStudent(student:Student):Observable<any>{
        return this.httpClient.put(`https://online-campus-cc35b-default-rtdb.firebaseio.com/student/${student.id}.json`, student);
    }
    getStudentByEmail(email:string):Observable<Student | null>{
        return this.httpClient.get<{[key:string] : Student}>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/students.json?orderBy="email"&equalTo="${email}"`).pipe(
            map((studentsResponse) => {
                
                for(const key in studentsResponse)
                    return Student.getStudentInstance(studentsResponse[key]);
                return null;
            })
        );
    }

    getStudentById(id:string):Observable<Student | null>{
        return this.httpClient.get<Student>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/students/${id}.json`).pipe(
            map((studentsResponse) => {
                
                return Student.getStudentInstance(studentsResponse);
            })
        );
    }
}