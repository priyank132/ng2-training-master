import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  login(username, password) {
    this.loginService.login(username, password);
    const isLoggedIn = this.loginService.isUserLoggedIn();
    if (isLoggedIn) {
      this.router.navigateByUrl('');
    }
  }
}
