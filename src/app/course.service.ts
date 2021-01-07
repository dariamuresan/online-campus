import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import { Course } from "./shared/course.model";
import { TeacherService } from "./teacher.service";

@Injectable({providedIn:'root'})
export class CourseService{
    courses!: Course[];

    nextId:number = 100;

    constructor(private teacherService:TeacherService, private httpClient:HttpClient){
         
    }

    getNextId():string{
        this.nextId += 1;
        return `${this.nextId}`;
    }

    addCourse(course:Course):Observable<any>{
        const courseId = course.id;
        let newCourseWithIdKey:{[key:string]:Course}= {};
        newCourseWithIdKey[`${courseId}`] = course;
        return this.httpClient.put(`https://online-campus-cc35b-default-rtdb.firebaseio.com/courses/${courseId}.json`, course);
    }

    getCourses():Observable<Course[]> {
        return this.httpClient.get<{[key:string] : Course}>('https://online-campus-cc35b-default-rtdb.firebaseio.com/courses.json').pipe(
            map(courses => {
                if(!courses)
                    return [];
                console.log(courses);
                const result:Course[] = [];
                for(const key in courses){
                    console.log(courses[key]);
                    result.push(Course.getCourseInstance(courses[key]));
                }
                console.log(result);
                return result;
            })
        );
    }

    getCourseWithId(id: string):Observable<Course | null> {
        return this.httpClient.get<Course>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/courses/${id}.json`).pipe(
            map((coursesResponse) => {
                console.log(coursesResponse);
                return Course.getCourseInstance(coursesResponse);
            })
        );
    }

    updateCourse(courseId: string, newCourse: Course):Observable<any>{
        let newCourseWithIdKey:{[key:string]:Course}= {};
        newCourseWithIdKey[`${courseId}`] = newCourse;
        return this.httpClient.put(`https://online-campus-cc35b-default-rtdb.firebaseio.com/courses/${courseId}.json`, newCourse);
    }

    deleteCourse(courseId:string):Observable<any>{
        return this.httpClient.delete(`https://online-campus-cc35b-default-rtdb.firebaseio.com/courses/${courseId}.json`);
    }
}