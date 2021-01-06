import { Teacher } from "./teacher.model";

export class Course {
    constructor(public id: number, public name: string, public teacher: Teacher, public description: string, public abreviation: string) {}
}