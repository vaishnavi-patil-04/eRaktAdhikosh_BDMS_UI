// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BankComponent } from './dashboard/bank/bank.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { OrganizationRegistrationComponent } from './organization-registration/organization-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },  // Default route
  { path: 'home', component: HomeComponent }, // Home Page
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'bank', component: BankComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'donor-registration', component: DonorRegistrationComponent },
  { path: 'organization-registration', component: OrganizationRegistrationComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }