import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { StartingRouteRetriever } from '../shared/starting-route';
import { User } from '../shared/user.model';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

    user!:User | null;
    startRoute!:string;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private authService:AuthService) { }

    onLogin() {
        this.router.navigate(['/login']);
    }

    onLogout() {
        this.router.navigate(['/login']);
    }

    ngOnInit(){
        this.authService.user.subscribe(
            (user:User | null) => {
                this.user = user;
                this.startRoute = '/login';
                if(user && user.role){
                    const startingRouteRetriever = new StartingRouteRetriever(user.role);
                    this.startRoute = startingRouteRetriever.getStartingRoute();
                    
                }

                    
            }
        )
    }
}