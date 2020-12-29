import { EventEmitter } from "@angular/core";
import { Course } from "../shared/course.model";

export class StudentCoursesService {
    courseSelected = new EventEmitter<Course>();
    
}