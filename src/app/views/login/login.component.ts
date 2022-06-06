import { Router } from '@angular/router';
import { User } from '../../objects/user.obj';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { MyInputService } from 'src/app/components/other/my-input/my-input.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    user: 'login.user',
    password: 'login.pass'
  }

  loginError: boolean = true;
  constructor(
    private service: LoginService,
    private myInput: MyInputService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toDisabled() {
    if (this.myInput.getValue(this.login.user) != '')
      if (this.myInput.getValue(this.login.password) != '') return false;
    return true;
  }

  onSubmit() {
    this.service.getUsers().subscribe(users => {
      const login = {
        account: this.myInput.getValue('login.user'),
        password: this.myInput.getValue('login.pass')
      }
      for (let i = 0; i < users.length; i++) {
        if (login.account == users[i].cpf && login.password == users[i].password) {
          this.loginError = true;
          this.service.setUserLoged(users[i]);
          return this.router.navigate(['/']);
        }
      }
      
      this.loginError = false;
    });
  }

}
