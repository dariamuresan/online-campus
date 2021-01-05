import { Course } from "./course.model";
import { Student } from "./student.model";

export class Enrollment{
    constructor(public student:Student, public course:Course, public grade:number){}
}