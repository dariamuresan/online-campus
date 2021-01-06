import { EventEmitter, Injectable } from "@angular/core";
import { CourseService } from "../course.service";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";

@Injectable()
export class StudentCoursesService {
    //private loggedStudent!: Student;

    courseSelected = new EventEmitter<Course>();

    constructor(private courseService:CourseService){}

    getCourses() {
        // return this.loggedStudent.getCourses();
        return this.courseService.getCourses();
    }

    getCourseWithID(id: number) {
        return this.courseService.getCourseWithId(id);
    }

    /*searchCourses() {
        saerch in the database for the courses your logged student is enrolled at
    }*/


}