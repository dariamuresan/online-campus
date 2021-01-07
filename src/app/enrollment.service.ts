import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CourseService } from "./course.service";
import { Course } from "./shared/course.model";
import { Enrollment } from "./shared/enrollment.model";
import { Student } from "./shared/student.model";
import { StudentService } from "./student.service";
@Injectable({providedIn:'root'})
export class EnrollmentService{
    
    enrollments!:Enrollment[];

    constructor(private studentService:StudentService, private courseService:CourseService, private httpClient:HttpClient){
        /*this.enrollments = [
            new Enrollment(this.studentService.getStudentById(1), this.courseService.getCourseWithId(1), 4),
            new Enrollment(this.studentService.getStudentById(2), this.courseService.getCourseWithId(1), 6),
            new Enrollment(this.studentService.getStudentById(3), this.courseService.getCourseWithId(1), 2),
            new Enrollment(this.studentService.getStudentById(4), this.courseService.getCourseWithId(1), 10),
            new Enrollment(this.studentService.getStudentById(5), this.courseService.getCourseWithId(1), 7),
            new Enrollment(this.studentService.getStudentById(1), this.courseService.getCourseWithId(2), 4),
            new Enrollment(this.studentService.getStudentById(3), this.courseService.getCourseWithId(2), 1),
            new Enrollment(this.studentService.getStudentById(5), this.courseService.getCourseWithId(2), 9),
            new Enrollment(this.studentService.getStudentById(2), this.courseService.getCourseWithId(3), 2),
            new Enrollment(this.studentService.getStudentById(3), this.courseService.getCourseWithId(3), 8),
        ];*/
    }

    existsEnrollment(student:Student, course:Course):Observable<boolean>{
        const studentId = student.id;
        const courseId = course.id;
        
        return this.httpClient.get<{[key:string] : Enrollment}>('https://online-campus-cc35b-default-rtdb.firebaseio.com/enrollments.json').pipe(
            map(enrollment => {
                if(!enrollment)
                    return false;
                return true;   
            })
        );
    }

    addEnrollment(student:Student, course:Course, grade:number):Observable<any>{
        
        const courseId = course.id;
        const studentId = student.id;
        let newEnrollmentWithIdKey:{[key:string]:Enrollment}= {};
        newEnrollmentWithIdKey[`${studentId}_${courseId}`] = new Enrollment(student, course, grade);
        return this.httpClient.put(`https://online-campus-cc35b-default-rtdb.firebaseio.com/enrollments/${studentId}_${courseId}.json`, new Enrollment(student, course, grade));
    }

    getStudentsEnrolledInCourse(courseId:string):Observable<Student[]>{
        return this.getEnrollmentsInCourse(courseId).pipe(
            map((enrollments:Enrollment[]) => {
                return enrollments.map(enrollment => enrollment.student);
            })
        );
    }
    
    getEnrollmentsInCourse(courseId:string):Observable<Enrollment[]>{
        return this.httpClient.get<{[key:string] : Enrollment}>(`https://online-campus-cc35b-default-rtdb.firebaseio.com/enrollments.json?orderBy="course/id"&equalTo="${courseId}"`).pipe(
            map((enrollmentsResponse) => {
                
                let result:Enrollment[] = [];
                for(const key in enrollmentsResponse)
                    result.push(Enrollment.getEnrollmentInstance(enrollmentsResponse[key]));
                return result;
            })
        );
    }

    updateGrade(student: Student, course: Course, grade: number):Observable<any>{
        const courseId = course.id;
        const studentId = student.id;
        let newEnrollmentWithIdKey:{[key:string]:Enrollment}= {};
        newEnrollmentWithIdKey[`${studentId}_${courseId}`] = new Enrollment(student, course, grade);
        return this.httpClient.put(`https://online-campus-cc35b-default-rtdb.firebaseio.com/enrollments/${studentId}_${courseId}.json`, new Enrollment(student, course, grade));
    }
}