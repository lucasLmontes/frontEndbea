import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  onLogin() {
    this.usuarioService.login(this.email, this.password).subscribe({
      next: (response) => {
        alert(response); // Mensagem do backend
        this.router.navigate(['/inicial']); // Redireciona após login
      },
      error: (err) => {
        console.error('Erro de login:', err);
        if (err.status === 401) {
          alert('Senha incorreta. Tente novamente.');
        } else if (err.status === 404) {
          alert('Usuário não encontrado.');
        } else {
          alert('Erro ao realizar login. Verifique os dados e tente novamente.');
        }
      },
    });
  }
}
