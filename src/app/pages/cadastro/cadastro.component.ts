import { Component } from '@angular/core';
import { UsuarioService, Usuario } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmPassword: string = '';

  constructor(private usuarioService: UsuarioService) {}

  onRegister() {
    if (this.senha !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
  
    const usuario: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };
  
    console.log('Usuário a ser enviado:', usuario);
  
    this.usuarioService.createUsuario(usuario).subscribe({
      next: (res) => {
        alert('Usuário registrado com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao registrar o usuário:', err);
        alert(`Ocorreu um erro. Tente novamente. Detalhes: ${err.message || err.error.message}`);
      },
    });
  }
  
  
}