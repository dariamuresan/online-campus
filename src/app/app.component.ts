import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-campus';

  loadedUser = 'home';

  onNavigation(user : string) {
    this.loadedUser = user;
  }
}
