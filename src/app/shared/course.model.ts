import { Teacher } from "./teacher.model";

export class Course {
    constructor(public id: string, public name: string, public teacher: Teacher, public description: string, public abreviation: string) {}

    static getCourseInstance(course:Course):Course{
        console.log(course);
        return new Course(course.id, course.name, Teacher.getTeacherInstance(course.teacher), course.description, course.abreviation);
    }
}