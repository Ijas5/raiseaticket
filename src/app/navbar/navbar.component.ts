import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Adjust the path as needed

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private renderer: Renderer2) {
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      this.updateBackground();
    });
  }

  ngOnInit() {
    this.updateBackground();
  }

  updateBackground() {
    if (this.isLoggedIn) {
      this.renderer.addClass(document.body, 'logged-in');
      this.renderer.removeClass(document.body, 'logged-out');
    } else {
      this.renderer.addClass(document.body, 'logged-out');
      this.renderer.removeClass(document.body, 'logged-in');
    }
  }

  logout() {
    this.authService.logout();
  }
}
