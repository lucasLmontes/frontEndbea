import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FeedbackService } from '../../services/feedback/feedback.service';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.css'],
})
export class FeedbackModalComponent implements OnInit {
  @Input() eventoId!: number;
  @Output() fechar = new EventEmitter<void>();
  feedbackTexto: string = '';
  feedbacks: any[] = [];
  feedbackEditando: any = null;

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.carregarFeedbacks();
  }

  carregarFeedbacks(): void {
    this.feedbackService.getFeedbackByEvento(this.eventoId).subscribe({
      next: (data) => {
        console.log('Feedbacks recebidos:', data);
        this.feedbacks = data;
      },
      error: (err) => {
        console.error('Erro ao carregar feedbacks:', err);
      },
    });
  }

  salvarFeedback(): void {
    if (this.feedbackTexto.trim()) {
      const novoFeedback = { texto: this.feedbackTexto, eventoId: this.eventoId };

      if (this.feedbackEditando) {
        this.feedbackService.atualizarFeedback(this.feedbackEditando.id, novoFeedback).subscribe({
          next: () => {
            console.log('Feedback atualizado com sucesso!');
            this.carregarFeedbacks();
            this.resetarFormulario();
          },
          error: (err) => {
            console.error('Erro ao atualizar feedback:', err);
          },
        });
      } else {
        this.feedbackService.cadastrarFeedback(novoFeedback).subscribe({
          next: () => {
            console.log('Feedback salvo com sucesso!');
            this.carregarFeedbacks();
            this.resetarFormulario();
          },
          error: (err) => {
            console.error('Erro ao salvar feedback:', err);
          },
        });
      }
    }
  }

  excluirFeedback(feedbackId: number): void {
    if (confirm('Deseja realmente excluir este feedback?')) {
      this.feedbackService.excluirFeedback(feedbackId).subscribe({
        next: () => {
          console.log('Feedback excluído com sucesso!');
          this.feedbacks = this.feedbacks.filter((feedback) => feedback.id !== feedbackId);
        },
        error: (err) => {
          console.error('Erro ao excluir feedback:', err);
        },
      });
    }
  }

  editarFeedback(feedback: any): void {
    this.feedbackTexto = feedback.texto;
    this.feedbackEditando = feedback;
  }

  cancelarEdicao(): void {
    this.resetarFormulario();
  }

  resetarFormulario(): void {
    this.feedbackTexto = '';
    this.feedbackEditando = null;
  }
}
