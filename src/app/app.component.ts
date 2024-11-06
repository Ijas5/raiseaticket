import { Component ,OnInit, OnDestroy, Renderer2} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; 
import { CommonModule } from '@angular/common';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PopupComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private authSubscription!: Subscription;

  constructor(private authService: AuthService, private renderer: Renderer2) {}
  showProfilePopup = false;

  toggleProfilePopup(visible: boolean = !this.showProfilePopup) {
    this.showProfilePopup = visible;
  }

  handleLogout() {
    // Additional logout handling if needed
    this.showProfilePopup = false; // Close the popup on logout
  }
  
  ngOnInit() {
    // Subscribe to authentication status and toggle the body's class
    this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.renderer.addClass(document.body, 'logged-in');
        this.renderer.removeClass(document.body, 'logged-out');
      } else {
        this.renderer.addClass(document.body, 'logged-out');
        this.renderer.removeClass(document.body, 'logged-in');
      }
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
  
}
