import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    alert(`Registro bem-sucedido!\nNome: ${this.name}\nEmail: ${this.email}`);

    this.router.navigate(['/login']);
  }
}
