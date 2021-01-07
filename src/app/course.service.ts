import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {map} from "rxjs/operators";
import { Course } from "./shared/course.model";
import { RandomPasswordGenerator } from "./shared/random-password-generator";
import { TeacherService } from "./teacher.service";

@Injectable({providedIn:'root'})
export class CourseService{
    courses!: Course[];
    randomPasswordGenerator = new RandomPasswordGenerator();

    nextId:number = 100;

    constructor(private teacherService:TeacherService, private httpClient:HttpClient){
         
    }

    getCoursesByTeacher(teacherId:string):Observable<Course[]>{
        /*return this.httpClient.get<{[key:string] : Course}>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/courses.json?orderBy="teacher/id"&equalTo="${teacherId}"`).pipe(
            map(courses => {
                if(!courses)
                    return [];
                
                const result:Course[] = [];
                for(const key in courses){
                    
                    result.push(Course.getCourseInstance(courses[key]));
                }
                
                return result;
            })
        );*/
        return this.getCourses().pipe(
            map((courses:Course[]) => {

                let result = courses.filter(course => course.teacher.id == teacherId);
                console.log(result);
                return result;
            }
        ));
    }

    getNextId():string{
        
        return this.randomPasswordGenerator.generatePassword(12);
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