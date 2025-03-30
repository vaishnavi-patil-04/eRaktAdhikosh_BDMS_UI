// organization-registration.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-organization-registration',
  standalone: true,
  template: `
    <form [formGroup]="yourFormGroup">
      <label for="name">Name:</label>
      <input id="name" formControlName="name" />
      
      <label for="email">Email:</label>
      <input id="email" formControlName="email" />
      
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './organization-registration.component.html',
  styleUrls: ['./organization-registration.component.css']
})
export class OrganizationRegistrationComponent {
  registrationForm: FormGroup;
  organizationTypes = ['Blood Bank', 'Hospital', 'Medical College', 'NGO', 'Other'];
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      orgName: ['', [Validators.required]],
      orgType: ['', [Validators.required]],
      licenseNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      contactPerson: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      website: [''],
      agreeTerms: [false, [Validators.requiredTrue]]
    });
  }
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Handle form submission - API call would go here
      console.log('Form submitted:', this.registrationForm.value);
      alert('Organization Registration successful!');
      this.router.navigate(['/login']);
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.get(key)?.markAsTouched();
      });
    }
  }
  
  goBack(): void {
    this.router.navigate(['/register']);
  }
}