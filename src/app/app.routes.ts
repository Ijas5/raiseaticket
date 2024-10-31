import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust path as necessary
import { SignupComponent } from './signup/signup.component'; // Adjust path as necessary
import { TicketsComponent } from './tickets/tickets.component'; // Adjust path as necessary
import { DashboardComponent } from './dashboard/dashboard.component';
import {RaiseATicketComponent } from './raise-a-ticket/raise-a-ticket.component';
import {DashboardticketsComponent} from './dashboardtickets/dashboardtickets.component';
import {ResourcesComponent} from './resources/resources.component'

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'raiseaticket', component: RaiseATicketComponent },
  { path: 'Dashboardtickets', component: DashboardticketsComponent },
  { path: 'Resources', component: ResourcesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
];
