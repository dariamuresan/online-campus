import { EventEmitter, Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { CourseService } from "../course.service";
import { EnrollmentService } from "../enrollment.service";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";
import { StudentService } from "../student.service";

@Injectable()
export class TeacherCoursesService {

    selectedCourse = new EventEmitter<Course>();

    constructor(private studentService:StudentService, private courseService:CourseService, private enrollmentService:EnrollmentService){}

    getCourses():Observable<Course[]> {
        return this.courseService.getCourses();
    }

    getCoursesByTeacher(teacherId:string){
        return this.courseService.getCoursesByTeacher(teacherId);
    }

    getCourseWithId(id: string):Observable<Course | null>{
        return this.courseService.getCourseWithId(id);
    }

    getStudents():Observable<Student[]>{
        return this.studentService.getStudents();
    }

    getStudentByEmail(email:string):Observable<Student | null>{
        return this.studentService.getStudentByEmail(email);
    }

    private studentFromEmailAndCourseFromIdRetrieverObservable(studentEmail:string, courseId:string):Observable<any[]>{
        const studentObservable = this.getStudentByEmail(studentEmail);
        const courseObservable = this.getCourseWithId(courseId);
        return forkJoin([studentObservable, courseObservable]);
    }

    addStudentToCourse(studentEmail:string, courseId:string):Observable<any>{
        
        
        return this.studentFromEmailAndCourseFromIdRetrieverObservable(studentEmail, courseId).pipe(
            switchMap((studentAndCourse:any[]) => {
                const student = studentAndCourse[0];
                const course = studentAndCourse[1];
                return this.enrollmentService.addEnrollment(student, course, 0);
            }));
    }
}