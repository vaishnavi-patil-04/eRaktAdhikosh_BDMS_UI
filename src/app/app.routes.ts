import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankComponent } from './dashboard/bank/bank.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { OrganizationRegistrationComponent } from './organization-registration/organization-registration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // This redirects the root URL to /home
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bank', component: BankComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donor-registration', component: DonorRegistrationComponent },
  { path: 'organization-registration', component: OrganizationRegistrationComponent },
  { path: '**', redirectTo: 'home' } // Handles 404 routes
];