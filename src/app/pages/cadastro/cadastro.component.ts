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
    // Verificar se as senhas coincidem
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Aqui você pode adicionar a lógica de registro, como chamar um serviço para enviar os dados ao servidor
    alert(`Registro bem-sucedido!\nNome: ${this.name}\nEmail: ${this.email}`);

    // Redirecionar para a página de login ou inicial após o registro
    this.router.navigate(['/login']);
  }
}
