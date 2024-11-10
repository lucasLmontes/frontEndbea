import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private eventosService: EventosService, private router: Router) { }

  ngOnInit(): void {
    // A chamada do serviço para obter os eventos
    this.eventosService.getEventos().subscribe(
      data => {
        this.eventos = data; // Armazenar os eventos recebidos
      },
      error => {
        console.error('Erro ao buscar eventos:', error); // Log do erro, se ocorrer
      }
    );
  }

  verDetalhes(id: number) {
    // Navega para a página de detalhes do evento
    this.router.navigate(['/eventos', id]);
  }
}
