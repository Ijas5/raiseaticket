import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.getInitialLoginState());
  isLoggedIn$ = this.loggedIn.asObservable();

  private getInitialLoginState(): boolean {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
  }

  login(email: string, password: string) {
    const isValidUser = email === 'afnas@gmail.com' && password === 'password';
    if (isValidUser) {
      this.loggedIn.next(true);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
      }
    }
  }

  logout() {
    this.loggedIn.next(false);
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('isLoggedIn');
    }
  }
}
