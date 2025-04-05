import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Import standalone components
import { HomeComponent } from './app/home/home.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { BankComponent } from './app/dashboard/bank/bank.component';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { DonorRegistrationComponent } from './app/donor-registration/donor-registration.component';
import { OrganizationRegistrationComponent } from './app/organization-registration/organization-registration.component';

const routes = [
  { path: '', component: HomeComponent },  // Home is the default
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bank', component: BankComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donor-registration', component: DonorRegistrationComponent },
  { path: 'organization-registration', component: OrganizationRegistrationComponent },
  { path: '**', redirectTo: '' } // Redirect any unknown route to home
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // ✅ Provides routing
    importProvidersFrom(ReactiveFormsModule)
  ]
}).catch(err => console.error(err));
