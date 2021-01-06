import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CourseService } from "../course.service";
import { Course } from "../shared/course.model";
import { Teacher } from "../shared/teacher.model";
import { TeacherService } from "../teacher.service";

@Injectable()
export class AdminCoursesService {
  
    selectedCourse = new EventEmitter<Course>();

    addedCourse = new Subject<void>();

    constructor(private courseService:CourseService, private teacherService:TeacherService){}

    getCourses() {
        return this.courseService.getCourses();
    }

    getTeachers() {
        return this.teacherService.getTeachers();
    }

    addCourse(course:Course):void{
      this.courseService.addCourse(course);
      this.addedCourse.next();
    }

    getCourseWithId(id: number) {
        return this.courseService.getCourseWithId(id);  
    }

    getNextId():number{
      return this.courseService.getNextId();
    }

    getTeacherById(id:number):Teacher{
      return this.teacherService.getTeacherById(id);
    }
}