import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { AuthService } from '../services/auth.service'; // Adjust the path as needed

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    const { email, password } = this.loginForm.value;

    // Call the AuthService to perform login
    this.authService.login(email, password);
    
    // Subscribe to check if the user is logged in
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/dashboard']);
        this.loginForm.reset(); 
        this.loginError = false;
      } else {
        this.loginError = true; // Show login error
      }
    });
  }

  onFormChange() {
    this.loginError = false;
  }
}
