import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos/eventos.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent {
  evento: any = {
    id: null,
    tituloEvento: '',
    data: '',
    endereco: '',
    cep: '',
    descricao: ''
  };

  constructor(private eventosService: EventosService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { evento: any };
    if (state && state.evento) {
      this.evento = state.evento;
    }
  }

  ngOnInit(): void {}

  salvarEvento() {
    if (this.evento.id) {
      this.eventosService.updateEvento(this.evento.id, this.evento).subscribe(
        () => {
          alert('Evento atualizado com sucesso!');
          this.router.navigate(['/eventos']);
        },
        (error) => {
          console.error('Erro ao atualizar evento:', error);
          alert('Erro ao atualizar evento.');
        }
      );
    } else {
      this.eventosService.createEvento(this.evento).subscribe(
        () => {
          alert('Evento criado com sucesso!');
          this.router.navigate(['/eventos']);
        },
        (error) => {
          console.error('Erro ao criar evento:', error);
          alert('Erro ao criar evento.');
        }
      );
    }
  }

  cancelar() {
    this.router.navigate(['/eventos']);
  }
}
