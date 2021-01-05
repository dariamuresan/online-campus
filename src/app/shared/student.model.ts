import { Course } from "./course.model";

export class Student {
    courses: Course[] = [];

    constructor(public id: number, public firstName: string, public lastName: string, public email:string) {};

    getCourses() {
        return this.courses.slice();
    }
}