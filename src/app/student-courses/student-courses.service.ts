import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseService } from "../course.service";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";

@Injectable()
export class StudentCoursesService {
    //private loggedStudent!: Student;

    courseSelected = new EventEmitter<Course>();

    constructor(private courseService:CourseService){}

    getCourses():Observable<Course[]>{
        // return this.loggedStudent.getCourses();
        return this.courseService.getCourses();
    }

    getCourseWithID(id: string): Observable<Course | null> {
        return this.courseService.getCourseWithId(id);
    }

    /*searchCourses() {
        saerch in the database for the courses your logged student is enrolled at
    }*/


}