import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donor-registration',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './donor-registration.component.html',
  styleUrls: ['./donor-registration.component.css']
})
export class DonorRegistrationComponent {
  donorForm!: FormGroup; 

  bloodGroups: string[] = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  constructor(private fb: FormBuilder) {
    this.donorForm = this.fb.group({ 
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      medicalConditions: [''],
      lastDonationDate: ['']
    });
  }

  onSubmit() {
    if (this.donorForm.valid) {
      console.log("Donor Details:", this.donorForm.value);
      // Send the donor data to backend API
    }
  }
}
