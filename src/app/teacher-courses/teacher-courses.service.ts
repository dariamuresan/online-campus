import { EventEmitter, Injectable } from "@angular/core";
import { CourseService } from "../course.service";
import { EnrollmentService } from "../enrollment.service";
import { Course } from "../shared/course.model";
import { Student } from "../shared/student.model";
import { StudentService } from "../student.service";

@Injectable()
export class TeacherCoursesService {

    selectedCourse = new EventEmitter<Course>();

    constructor(private studentService:StudentService, private courseService:CourseService, private enrollmentService:EnrollmentService){}

    getCourses():Course[] {
        return this.courseService.getCourses();
    }

    getCourseWithId(id: number):Course{
        return this.courseService.getCourseWithId(id);
    }

    getStudents() {
        return this.studentService.getStudents();
    }

    getStudentByEmail(email:string):Student{
        return this.studentService.getStudentByEmail(email);
    }

    addStudentToCourse(studentEmail:string, courseId:number){
        let student = this.getStudentByEmail(studentEmail);
        let course = this.getCourseWithId(courseId);
        this.enrollmentService.addEnrollment(student, course, 0);
    }
}