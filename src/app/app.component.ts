import { LoginService } from './views/login/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private login: LoginService
  ) {}
    
  loged() {
    if (this.login.getUserLoged()) return true;
    return false;
  }
  
}
