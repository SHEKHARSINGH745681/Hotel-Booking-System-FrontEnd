import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };
  message = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('https://localhost:7287/api/User/register', this.user)
      .subscribe({
        next: (res: any) => this.message = res.message,
        error: err => this.message = 'Registration failed: ' + err.error
      });
  }
}
