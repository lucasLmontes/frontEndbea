import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
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
    this.eventosService.getEventos().subscribe(data => {
      this.eventos = data;
    });
  }

  verDetalhes(id: string) {
    this.router.navigate(['/eventos', id]);
  }
}
