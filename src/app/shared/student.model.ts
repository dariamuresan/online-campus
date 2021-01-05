import { Course } from "./course.model";

export class Student {
    courses: Course[] = [];

    constructor(public ID: number, public firstName: string, public lastName: string) {};

    getCourses() {
        return this.courses.slice();
    }
}