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
    // Implementar a lógica de autenticação aqui
    if (this.email === 'user@example.com' && this.password === 'password') {
      alert('Login bem-sucedido!');
      this.router.navigate(['/inicial']); // Redireciona para a página inicial após o login
    } else {
      alert('Credenciais inválidas.');
    }
  }
}
