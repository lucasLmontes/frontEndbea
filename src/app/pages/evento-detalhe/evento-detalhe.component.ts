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
  exibirModalFeedback: boolean = false;
  exibirModalAtracao: boolean = false;

  constructor(
    private eventosService: EventosService,
    private feedbackService: FeedbackService,
    private atracoesService: AtracoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.carregarEvento(Number(id));
      this.carregarFeedbacks(Number(id));
      this.carregarAtracoes(Number(id));
    } else {
      console.error('ID do evento não encontrado.');
    }
  }

  carregarEvento(id: number): void {
    this.eventosService.getEventoById(id).subscribe(
      (data) => {
        this.evento = data;
        this.erroEvento = false;
      },
      (error) => {
        console.error('Erro ao buscar evento:', error);
        this.erroEvento = true;
      }
    );
  }

  carregarFeedbacks(id: number): void {
    this.feedbackService.getFeedbackByEvento(id).subscribe(
      (data) => {
        this.feedbacks = data;
        this.erroFeedbacks = false;
      },
      (error) => {
        console.error('Erro ao buscar feedbacks:', error);
        this.erroFeedbacks = true;
      }
    );
  }

  carregarAtracoes(id: number): void {
    this.atracoesService.getAtracoesByEvento(id).subscribe(
      (data) => {
        this.atracoes = data;
        this.erroAtracoes = false;
      },
      (error) => {
        console.error('Erro ao buscar atrações:', error);
        this.erroAtracoes = true;
      }
    );
  }  

  abrirModalFeedback(): void {
    this.exibirModalFeedback = true;
  }

  fecharModalFeedback(): void {
    this.exibirModalFeedback = false;
  }

  abrirModalAtracao(): void {
    this.exibirModalAtracao = true;
  }

  fecharModalAtracao(): void {
    this.exibirModalAtracao = false;
  }
}
