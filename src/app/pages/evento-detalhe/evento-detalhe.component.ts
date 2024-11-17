import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos/eventos.service';
import { FeedbackService } from '../../services/feedback/feedback.service';
import { AtracoesService } from '../../services/atracoes/atracoes.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  evento: any;
  feedbacks: any[] = [];
  atracoes: any[] = [];
  erroEvento: boolean = false;
  erroFeedbacks: boolean = false;
  erroAtracoes: boolean = false;
  loadingEvento: boolean = true;
  loadingFeedbacks: boolean = true;
  loadingAtracoes: boolean = true;

  localImageUrl: string = 'assets/public/';

  constructor(
    private eventosService: EventosService,
    private feedbackService: FeedbackService,
    private atracoesService: AtracoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.eventosService.getEventoById(id).subscribe(
      (data) => {
        this.evento = data;
        this.erroEvento = false;
        this.loadingEvento = false;
      },
      (error) => {
        console.error('Erro ao buscar evento:', error);
        this.erroEvento = true;
        this.loadingEvento = false;
      }
    );

    this.feedbackService.getFeedbackByEvento(id).subscribe(
      (data) => {
        this.feedbacks = data;
        this.erroFeedbacks = false;
        this.loadingFeedbacks = false;
      },
      (error) => {
        console.error('Erro ao buscar feedbacks:', error);
        this.erroFeedbacks = true;
        this.loadingFeedbacks = false;
      }
    );

    this.atracoesService.getAtracoesByEvento(id).subscribe(
      (data) => {
        this.atracoes = data;
        this.erroAtracoes = false;
        this.loadingAtracoes = false;
      },
      (error) => {
        console.error('Erro ao buscar atrações:', error);
        this.erroAtracoes = true;
        this.loadingAtracoes = false;
      }
    );
  }
}
