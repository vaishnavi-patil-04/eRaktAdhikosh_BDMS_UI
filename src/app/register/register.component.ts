// register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private router: Router) { }

  navigateToRegistration(type: string): void {
    if (type === 'donor') {
      this.router.navigate(['/donor-registration']);
    } else {
      this.router.navigate(['/organization-registration']);
    }
  }
}