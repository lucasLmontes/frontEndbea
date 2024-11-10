import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { FeedbackService } from '../../services/feedback/feedback.service'; // Serviço de feedbacks

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  evento: any; // Detalhes do evento
  feedbacks: any[] = []; // Feedbacks associados ao evento
  erroEvento: boolean = false; // Flag de erro para o evento
  erroFeedbacks: boolean = false; // Flag de erro para os feedbacks
  loadingEvento: boolean = true; // Flag de carregamento do evento
  loadingFeedbacks: boolean = true; // Flag de carregamento dos feedbacks

  constructor(
    private eventosService: EventosService,
    private feedbackService: FeedbackService, // Injetando o serviço de feedbacks
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Carregar os detalhes do evento
    this.eventosService.getEventoById(id).subscribe(
      (data) => {
        this.evento = data;
        this.erroEvento = false; // Caso a requisição seja bem-sucedida, remove o erro
        this.loadingEvento = false; // Finaliza o carregamento do evento
      },
      (error) => {
        console.error('Erro ao buscar evento:', error);
        this.erroEvento = true; // Marca que houve um erro ao carregar o evento
        this.loadingEvento = false; // Finaliza o carregamento do evento
      }
    );

    // Carregar os feedbacks para o evento
    this.feedbackService.getFeedbackByEvento(id).subscribe(
      (data) => {
        this.feedbacks = data;
        this.erroFeedbacks = false; // Caso a requisição seja bem-sucedida, remove o erro
        this.loadingFeedbacks = false; // Finaliza o carregamento dos feedbacks
      },
      (error) => {
        console.error('Erro ao buscar feedbacks:', error);
        this.erroFeedbacks = true; // Marca que houve um erro ao carregar os feedbacks
        this.loadingFeedbacks = false; // Finaliza o carregamento dos feedbacks
      }
    );
  }
}
