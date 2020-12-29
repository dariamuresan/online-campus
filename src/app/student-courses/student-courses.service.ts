import { EventEmitter } from "@angular/core";
import { Course } from "../shared/course.model";

export class StudentCoursesService {
    courses: Course[] = [
        new Course('Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
        new Course('Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
        new Course('Databases', 'Dan P.', 'SQL', 'DB')
    ];

    courseSelected = new EventEmitter<Course>();

    getCourses() {
        return this.courses.slice();
    }
}