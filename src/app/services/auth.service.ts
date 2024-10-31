import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  login(email: string, password: string) {
    const isValidUser = email === 'afnas@gmail.com' && password === 'password';
    if (isValidUser) {
      this.loggedIn.next(true);
    }
  }

  logout() {
    this.loggedIn.next(false);
  }
}
