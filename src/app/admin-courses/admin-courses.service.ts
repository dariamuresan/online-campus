import { EventEmitter } from "@angular/core";
import { Course } from "../shared/course.model";
import { Teacher } from "../shared/teacher.model";

export class AdminCoursesService {
    courses: Course[] = [
      new Course(1, 'Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
      new Course(2, 'Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
      new Course(3, 'Databases', 'Dan P.', 'SQL', 'DB')
    ];

    teachers: Teacher[] = [
        new Teacher(1, "Alexandru", "B."),
        new Teacher(2, "Alexandru", "C."),
        new Teacher(3, "Alexandru", "D."),
        new Teacher(4, "Alexandru", "E."),
        new Teacher(5, "Alexandru", "F."),
        new Teacher(6, "Alexandru", "G."),
        new Teacher(7, "Alexandru", "H."),
        new Teacher(8, "Alexandru", "I.")
      ];

    selectedCourse = new EventEmitter<Course>();

    getCourses() {
        return this.courses.slice();
    }

    getTeachers() {
        return this.teachers.slice();
    }

    getCourseWithId(id: number) {
      for(let c of this.courses) {
        if(c.id == id) 
        return c;
      }
      return this.courses[0];
    }
}