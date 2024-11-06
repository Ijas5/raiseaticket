import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {

    passwordVisible = false;
  
    constructor(private router: Router) {}
  
    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
      const passwordInput = document.getElementById('password-input') as HTMLInputElement;
      passwordInput.type = this.passwordVisible ? 'text' : 'password';
    }
  
    goBack() {
      this.router.navigate(['/dashboard']);
    }
  }
  

