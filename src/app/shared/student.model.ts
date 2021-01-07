import { Course } from "./course.model";

export class Student {
    

    constructor(public id: string, public firstName: string, public lastName: string, public email:string) {};

    static getStudentInstance(student:Student):Student{
        return new Student(student.id, student.firstName, student.lastName, student.email);
    }
}