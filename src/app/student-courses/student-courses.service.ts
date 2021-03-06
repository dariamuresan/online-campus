import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseService } from "../course.service";
import { EnrollmentService } from "../enrollment.service";
import { Course } from "../shared/course.model";
import { Enrollment } from "../shared/enrollment.model";
import { Student } from "../shared/student.model";

@Injectable()
export class StudentCoursesService {
    //private loggedStudent!: Student;

    courseSelected = new EventEmitter<Course>();

    constructor(private courseService:CourseService, private enrollmentService:EnrollmentService){}

    getCoursesForStudent(studentId:string):Observable<Course[]>{
        return this.enrollmentService.getCoursesForStudent(studentId);
    }

    getCourses():Observable<Course[]>{
        // return this.loggedStudent.getCourses();
        return this.courseService.getCourses();
    }

    getCourseWithID(id: string): Observable<Course | null> {
        return this.courseService.getCourseWithId(id);
    }

    getGrade(studentId:string, courseId:string):Observable<number>{
        return this.enrollmentService.getEnrollmentByStudentIdAndCourseId(studentId, courseId).pipe(
            map((enrollment:Enrollment | null) => {
                if(!enrollment)
                    return 0;
                return enrollment.grade;
            }
        ));
    }
    /*searchCourses() {
        saerch in the database for the courses your logged student is enrolled at
    }*/


}