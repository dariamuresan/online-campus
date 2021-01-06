import { Injectable } from "@angular/core";
import { CourseService } from "./course.service";
import { Course } from "./shared/course.model";
import { Enrollment } from "./shared/enrollment.model";
import { Student } from "./shared/student.model";
import { StudentService } from "./student.service";
@Injectable({providedIn:'root'})
export class EnrollmentService{
    
    enrollments!:Enrollment[];

    constructor(private studentService:StudentService, private courseService:CourseService){
        this.enrollments = [
            new Enrollment(this.studentService.getStudentById(1), this.courseService.getCourseWithId(1), 4),
            new Enrollment(this.studentService.getStudentById(2), this.courseService.getCourseWithId(1), 6),
            new Enrollment(this.studentService.getStudentById(3), this.courseService.getCourseWithId(1), 2),
            new Enrollment(this.studentService.getStudentById(4), this.courseService.getCourseWithId(1), 10),
            new Enrollment(this.studentService.getStudentById(5), this.courseService.getCourseWithId(1), 7),
            new Enrollment(this.studentService.getStudentById(1), this.courseService.getCourseWithId(2), 4),
            new Enrollment(this.studentService.getStudentById(3), this.courseService.getCourseWithId(2), 1),
            new Enrollment(this.studentService.getStudentById(5), this.courseService.getCourseWithId(2), 9),
            new Enrollment(this.studentService.getStudentById(2), this.courseService.getCourseWithId(3), 2),
            new Enrollment(this.studentService.getStudentById(3), this.courseService.getCourseWithId(3), 8),
        ];
    }

    existsEnrollment(student:Student, course:Course):boolean{
        for(let enrollment of this.enrollments){
            if(enrollment.student.id == student.id && enrollment.course.id == course.id){
                return true;
            }
        }
        return false;
    }

    addEnrollment(student:Student, course:Course, grade:number){
        if(!this.existsEnrollment(student, course))
            this.enrollments.push(new Enrollment(student, course, grade));
    }

    getStudentsEnrolledInCourse(courseId:number):Student[]{
        return this.enrollments.filter(enrollment => enrollment.course.id === courseId)
            .map(enrollment => enrollment.student);
    }
    
    getEnrollmentsInCourse(courseId:number):Enrollment[]{
        return this.enrollments.filter(enrollment => enrollment.course.id === courseId);
    }

    updateGrade(student: Student, course: Course, grade: number):void{
        const studentId = student.id;
        const courseId = course.id;
        for(let enrollment of this.enrollments){
            if(enrollment.course.id == courseId && enrollment.student.id == studentId){
                enrollment.grade = grade;
                break;
            }
        }
    }
}