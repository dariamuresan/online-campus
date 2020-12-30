import { EventEmitter } from "@angular/core";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";

export class StudentCoursesService {
    //private loggedStudent!: Student;

    courses: Course[] = [
        new Course('Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
        new Course('Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
        new Course('Databases', 'Dan P.', 'SQL', 'DB')
    ];

    courseSelected = new EventEmitter<Course>();

    getCourses() {
        // return this.loggedStudent.getCourses();
        return this.courses.slice();
    }

    /*searchCourses() {
        saerch in the database for the courses your logged student is enrolled at
    }*/


}