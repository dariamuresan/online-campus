import { EventEmitter, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { CourseService } from "../course.service";
import { Course } from "../shared/course.model";
import { Teacher } from "../shared/teacher.model";
import { TeacherService } from "../teacher.service";

@Injectable()
export class AdminCoursesService {
    
    selectedCourse = new EventEmitter<Course>();

    changedCourses = new Subject<void>();

    constructor(private courseService:CourseService, private teacherService:TeacherService){}

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