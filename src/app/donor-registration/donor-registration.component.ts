// donor-registration.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-registration',
  standalone: true,
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class DonorRegistrationComponent {
  registrationForm: FormGroup;
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      bloodType: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      lastDonationDate: [''],
      agreeTerms: [false, [Validators.requiredTrue]]
    });
  }
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Handle form submission - API call would go here
      console.log('Form submitted:', this.registrationForm.value);
      alert('Registration successful!');
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