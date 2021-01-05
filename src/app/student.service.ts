import { Injectable } from "@angular/core";
import { Student } from "./shared/student.model";

@Injectable({providedIn:'root'})
export class StudentService{
    students: Student[] = [
        new Student(1, "Daria", "M.", "test@test.com"),
        new Student(2, "Daria", "N.", "test1@test.com"),
        new Student(3, "Daria", "O.", "test2@test.com"),
        new Student(4, "Daria", "P.", "test3@test.com"),
        new Student(5, "Daria", "Q.", "test4@test.com"),
        new Student(6, "Daria", "R.", "test5@test.com"),
        new Student(7, "Daria", "S.", "test6@test.com"),
        new Student(8, "Daria", "T.", "test7@test.com")
      ];
    getStudents():Student[] {
        return this.students.slice();
    }

    getStudentByEmail(email:string):Student{
        for(let student of this.students){
            if(student.email === email){
                return student;
            }
        }
        return this.students[0];
    }

    getStudentById(id:number):Student{
        for(let student of this.students){
            if(student.id === id){
                return student;
            }
        }
        return this.students[0];
    }
}