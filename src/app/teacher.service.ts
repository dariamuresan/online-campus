import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Teacher } from "./shared/teacher.model";

@Injectable({providedIn:'root'})
export class TeacherService{
    teachers:Teacher[] = [
        new Teacher(1, 'Cosmin', 'C.', 'test100@test.com'),
        new Teacher(2, 'Cristina', 'M.', 'test101@test.com'),
        new Teacher(3, 'Dan', 'P.', 'test102@test.com'),
    ];  

    getTeacherById(id:number):Teacher{
        for(let teacher of this.teachers){
            if(teacher.id == id){
                return teacher;
            }
        }
        return this.teachers[0];
    }

    getTeachers():Teacher[]{
        return this.teachers;
    }
}