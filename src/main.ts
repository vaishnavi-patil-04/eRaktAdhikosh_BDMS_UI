import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { DonorRegistrationComponent } from './app/donor-registration/donor-registration.component';
import { OrganizationRegistrationComponent } from './app/organization-registration/organization-registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donor-registration', component: DonorRegistrationComponent },
  { path: 'organization-registration', component: OrganizationRegistrationComponent },
  { path: '**', redirectTo: '/login' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));