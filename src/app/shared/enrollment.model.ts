import { Course } from "./course.model";
import { Student } from "./student.model";

export class Enrollment{
    constructor(public student:Student, public course:Course, public grade:number){}

    static getEnrollmentInstance(enrollment:Enrollment):Enrollment{
        let student = Student.getStudentInstance(enrollment.student);
        let course = Course.getCourseInstance(enrollment.course);
        return new Enrollment(student, course, enrollment.grade);
    }
}