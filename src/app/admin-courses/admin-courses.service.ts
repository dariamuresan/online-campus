import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { merge, Observable, Subject } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { AuthService } from "../authentication/auth.service";
import { CourseService } from "../course.service";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";
import { Teacher } from "../shared/teacher.model";
import { User } from "../shared/user.model";
import { StudentService } from "../student.service";
import { TeacherService } from "../teacher.service";
import { UserService } from "../user.service";

@Injectable()
export class AdminCoursesService {
    
    selectedCourse = new EventEmitter<Course>();

    changedCourses = new Subject<void>();

    constructor(private studentService:StudentService, private courseService:CourseService, private teacherService:TeacherService, private authService:AuthService, private httpClient:HttpClient){}

    private sendEmail(email:string, password:string):Observable<any>{
      return this.httpClient.get(`https://us-central1-online-campus-cc35b.cloudfunctions.net/sendMail?dest=${email}&password=${password}`,{
        responseType:'text'
      });
    }

    signupTeacher(email:string, password:string, role:string, teacher:Teacher):Observable<any>{
      return this.authService.signup(email, password, role).pipe(
        switchMap((user:User) => {
          teacher.id = user.id;
          return this.teacherService.addTeacher(teacher);
        }),
        switchMap(() => {
          return this.sendEmail(email, password);
        })
      );
    }

    signupStudent(email:string, password:string, role:string, student:Student):Observable<any>{
      return this.authService.signup(email, password, role).pipe(
        switchMap((user:User) => {
          student.id = user.id;
          return this.studentService.addStudent(student);
        }),
        switchMap(() => {
          return this.sendEmail(email, password);
        })
      );
    }

    getCourses():Observable<Course[]>{
        return this.courseService.getCourses();
    }

    getTeachers():Observable<Teacher[]> {
        return this.teacherService.getTeachers();
    }

    addCourse(course:Course):Observable<any>{
      return this.courseService.addCourse(course).pipe(
        tap({
          complete:  () => {
              this.changedCourses.next();
            }
        }
      ));
    }

    getCourseWithId(id: string):Observable<Course | null> {
        return this.courseService.getCourseWithId(id);  
    }

    getNextId():string{
      return this.courseService.getNextId();
    }

    getTeacherById(id:string):Observable<Teacher | null>{
      return this.teacherService.getTeacherById(id);
    }

    updateCourse(courseId: string, course: Course):Observable<any>{
      return this.courseService.updateCourse(courseId, course).pipe(
        tap({
          complete: () => {this.changedCourses.next()}
        })
      );
      
    }

    deleteCourse(courseId:string) : Observable<any>{
      return this.courseService.deleteCourse(courseId).pipe(
        tap({
          complete: () => {this.changedCourses.next()}
        })
      );
    }
}