import { Injectable } from "@angular/core";
import { Course } from "./shared/course.model";

@Injectable({providedIn:'root'})
export class CourseService{
    courses: Course[] = [
        new Course(1, 'Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
        new Course(2, 'Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
        new Course(3, 'Databases', 'Dan P.', 'SQL', 'DB')
    ];

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