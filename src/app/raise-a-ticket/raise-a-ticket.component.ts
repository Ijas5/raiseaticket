import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-raise-a-ticket',
  templateUrl: './raise-a-ticket.component.html',
  styleUrls: ['./raise-a-ticket.component.css'],
  standalone: true,
  imports:[CommonModule,FormsModule]
})
export class RaiseATicketComponent {
  requestShow = false;
  bar = false;
  bar2 = false;

  formData = {
    category: '',
    priority: '',
    group: '',
    agent: '',
    subject: '',
    description: '',
    requestedBy: '',
    modeOfRequest: ''
  };

  requestBy = ['User1', 'User2'];
  modeOfRequest = ['Email', 'Phone'];
  firstDropdown = ['Category1', 'Category2'];
  secondDropdown = ['Low', 'Medium', 'High'];
  thirdDropdown = ['Group1', 'Group2'];
  fourthDropdown = ['Agent1', 'Agent2'];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log(file);
  }

  uploadFile() {
    console.log('File uploaded');
  }

  submitData() {
    console.log('Ticket submitted', this.formData);
  }
}
