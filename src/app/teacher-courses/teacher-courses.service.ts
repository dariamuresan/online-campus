import { EventEmitter } from "@angular/core";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";

export class TeacherCoursesService {
    courses: Course[] = [
        new Course(1, 'Artificial Inteligence', 'Cosmin C.', 'piton', 'AIF'),
        new Course(2, 'Software System Design', 'Cristina M.', 'proiectul asta miune', 'SSD'),
        new Course(3, 'Databases', 'Dan P.', 'SQL', 'DB')
    ];

    students: Student[] = [
        new Student(1, "Daria", "M."),
        new Student(1, "Daria", "N."),
        new Student(1, "Daria", "O."),
        new Student(1, "Daria", "P."),
        new Student(1, "Daria", "Q."),
        new Student(1, "Daria", "R."),
        new Student(1, "Daria", "S."),
        new Student(1, "Daria", "T.")
      ];

    selectedCourse = new EventEmitter<Course>();

    getCourses() {
        return this.courses.slice();
    }

    getCourseWithId(id: number) {
        for (let course of this.courses) {
            if (course.ID == id)
                return course;
        }
        
        return this.courses[0];
    }

    getStudents() {
        return this.students.slice();
    }
}