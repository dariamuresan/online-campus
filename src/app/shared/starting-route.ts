export class StartingRouteRetriever{
    constructor(private role:string){}

    getStartingRoute():string{
        if(this.role == 'admin'){
            return '/admin-courses';
        }
        if(this.role == 'teacher'){
           return '/teacher-courses';
        }
        return '/student-courses';  
    }
}