import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // Counter properties
  assigned: number = 0;
  resolved: number = 0;
  unresolved: number = 0;
  unassigned: number = 0;
  pending: number = 0;
  overdue: number = 0;
  dueToday: number = 0;
  dueTomorrow: number = 0;

  // Increment methods for each property
  incrementAssigned() {
    this.assigned++;
  }

  incrementResolved() {
    this.resolved++;
  }

  incrementUnresolved() {
    this.unresolved++;
  }

  incrementUnassigned() {
    this.unassigned++;
  }

  incrementPending() {
    this.pending++;
  }

  incrementOverdue() {
    this.overdue++;
  }

  incrementDueToday() {
    this.dueToday++;
  }

  incrementDueTomorrow() {
    this.dueTomorrow++;
  }

  // Method to reset data (if needed)
  refreshData() {
    this.assigned = 0;
    this.resolved = 0;
    this.unresolved = 0;
    this.unassigned = 0;
    this.pending = 0;
    this.overdue = 0;
    this.dueToday = 0;
    this.dueTomorrow = 0;
  }
}
