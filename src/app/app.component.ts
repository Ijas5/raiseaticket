import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; 
import { CommonModule } from '@angular/common';
import { PopupComponentComponent } from './popup-component/popup-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, PopupComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showProfilePopup = false;

  toggleProfilePopup(visible: boolean = !this.showProfilePopup) {
    this.showProfilePopup = visible;
  }

  handleLogout() {
    // Additional logout handling if needed
    this.showProfilePopup = false; // Close the popup on logout
  }
}
