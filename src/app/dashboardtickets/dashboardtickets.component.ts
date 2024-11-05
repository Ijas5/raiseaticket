// dashboardtickets.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardtickets',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './dashboardtickets.component.html',
  styleUrls: ['./dashboardtickets.component.css']
})
export class DashboardticketsComponent {
  // Define the properties
  sortOptions: string[] = ['Channel', 'Company', 'Category', 'Department', 'Priority', 'Status', 'Group', 'Agent', 'Requester', 'Tag', 'Due By'];
  tickets: any[] = [
    {
      ownerName: 'Owner Name',
      bookingDate: 'Date of Booking',
      title: '#4952 - Fw: ERROR',
      lastActivity: 'Last activity: Status changed by name around date',
      details: [
        { label: 'Category', value: 'Problem' },
        { label: 'Priority', value: 'Medium' },
        { label: 'Group', value: 'DOTS PDC' },
        { label: 'Agent', value: 'Owner' }
      ],
      responseOverdue: true,
      resolveOverdue: true
    }
    // Add more ticket objects as needed
  ];
  pages: number[] = [1, 2]; // Example page numbers

  constructor() {
    // You can initialize your data here if needed
  }
}
