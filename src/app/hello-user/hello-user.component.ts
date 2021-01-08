import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
