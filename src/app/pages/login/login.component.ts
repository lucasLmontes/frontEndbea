import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'user@example.com' && this.password === 'password') {
      alert('Login bem-sucedido!');
      this.router.navigate(['/inicial']);
    } else {
      alert('Credenciais inválidas.');
    }
  }
}
