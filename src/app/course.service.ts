import { Injectable } from "@angular/core";
import { Course } from "./shared/course.model";
import { TeacherService } from "./teacher.service";

@Injectable({providedIn:'root'})
export class CourseService{
    courses: Course[];

    nextId:number = 100;

    constructor(private teacherService:TeacherService){
        this.courses = [
            new Course(1, 'Artificial Inteligence', this.teacherService.getTeacherById(1), 'piton', 'AIF'),
            new Course(2, 'Software System Design', this.teacherService.getTeacherById(2), 'proiectul asta miune', 'SSD'),
            new Course(3, 'Databases', this.teacherService.getTeacherById(1), 'SQL', 'DB')
        ]; 
    }

    getNextId():number{
        this.nextId += 1;
        return this.nextId;
    }

    addCourse(course:Course):void{
        this.courses.push(course);
    }

    getCourses():Course[] {
        return this.courses.slice();
    }

    getCourseWithId(id: number):Course {
        for (let course of this.courses) {
            if (course.id == id)
                return course;
        }
        
        return this.courses[0];
    }
}