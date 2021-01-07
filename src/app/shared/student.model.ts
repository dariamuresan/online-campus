import { Course } from "./course.model";
import { User } from "./user.model";

export class Student{
    
    role = "student";
    constructor(public id: string, public firstName: string, public lastName: string, public email:string) {};

    static getStudentInstance(student:Student):Student{
        return new Student(student.id, student.firstName, student.lastName, student.email);
    }
}