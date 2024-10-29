import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  evento: any; // Defina o tipo adequado, se possível

  constructor(
    private eventosService: EventosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventosService.getEventoById(id).subscribe(data => {
      this.evento = data;
    }, error => {
      console.error('Erro ao buscar evento:', error);
    });
  }
}
  