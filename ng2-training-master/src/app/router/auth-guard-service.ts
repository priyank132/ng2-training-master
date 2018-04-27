
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {Observable} from "rxjs";
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {
  }

  canActivate(): Observable<boolean> {
    const isActivate = this.loginService.isUserLoggedIn();
    if (isActivate) {
      return Observable.of(isActivate);
    } else {
        this.router.navigateByUrl('login');
    }
  }
}
