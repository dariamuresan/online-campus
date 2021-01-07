export class Teacher {
    constructor(public id: string, public firstName: string, public lastName: string, public email:string) {}

    static getTeacherInstance(teacher:Teacher):Teacher{
        return new Teacher(teacher.id, teacher.firstName, teacher.lastName, teacher.email);
    }
}