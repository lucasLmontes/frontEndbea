import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../../services/eventos/eventos.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private eventosService: EventosService, private router: Router) {}

  ngOnInit(): void {
    this.carregarEventos();
  }

  verDetalhes(id: number) {
    this.router.navigate(['/eventos', id]);
  }

  carregarEventos() {
    this.eventosService.getEventos().subscribe(
      (data) => {
        this.eventos = data;
      },
      (error) => {
        console.error('Erro ao carregar eventos:', error);
      }
    );
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro-evento']);
  }

  editarEvento(evento: any) {
    this.router.navigate(['/cadastro-evento'], { state: { evento } });
  }

  deletarEvento(id: number): void {
    if (confirm('Deseja realmente excluir este aluno?')) {
      this.eventosService.deleteEvento(id).subscribe(() => this.carregarEventos());
    }
  }
}
