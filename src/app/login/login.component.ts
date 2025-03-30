// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule] 
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle login - API call would go here
      console.log('Login attempt:', this.loginForm.value);
      // For now, just log the user in (this would normally check credentials)
      alert('Login successful!');
      // You would navigate to a dashboard or home page after login
    } else {
      // Mark all fields as touched to trigger validation display
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }
  
  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}