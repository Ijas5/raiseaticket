import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-popup-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent {
  @Output() close = new EventEmitter<void>();
  @Output() logoutEvent = new EventEmitter<void>(); 

  constructor(private authService: AuthService) {}

  closePopup() {
    this.close.emit();
  }

  logout() {
    this.authService.logout();
    this.closePopup();
    this.logoutEvent.emit();
  }
}
