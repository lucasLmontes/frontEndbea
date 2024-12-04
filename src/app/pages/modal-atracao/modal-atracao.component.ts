import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AtracoesService } from '../../services/atracoes/atracoes.service';

@Component({
  selector: 'app-modal-atracao',
  templateUrl: './modal-atracao.component.html',
  styleUrls: ['./modal-atracao.component.css'],
})
export class ModalAtracaoComponent implements OnInit {
  @Input() eventoId!: number;
  @Output() fechar = new EventEmitter<void>();
  atracaoTexto: string = '';
  dataInicio!: string;
  dataFim!: string;
  atracoes: any[] = [];
  atracaoEditando: any = null;

  constructor(private atracaoService: AtracoesService) {}

  ngOnInit(): void {
    this.carregarAtracoes();
  }

  carregarAtracoes(): void {
    this.atracaoService.getAtracoesByEvento(this.eventoId).subscribe({
      next: (data) => {
        console.log('Atrações recebidas:', data);
        this.atracoes = data;
      },
      error: (err) => {
        console.error('Erro ao carregar atrações:', err);
      },
    });
  }

  excluirAtracao(atracaoId: number): void {
    if (confirm('Deseja realmente excluir esta atração?')) {
      this.atracaoService.excluirAtracao(atracaoId).subscribe({
        next: () => {
          console.log('Atração excluída com sucesso!');
          this.atracoes = this.atracoes.filter((atracao) => atracao.id !== atracaoId);
        },
        error: (err) => {
          console.error('Erro ao excluir atração:', err);
        },
      });
    }
  }

  editarAtracao(atracao: any): void {
    this.atracaoTexto = atracao.texto;
    this.dataInicio = atracao.dataInicio;
    this.dataFim = atracao.dataFim;
    this.atracaoEditando = atracao;
  }
  
  salvarAtracao(): void {
    if (this.atracaoTexto.trim() && this.dataInicio && this.dataFim) {
      const atracao = {
        texto: this.atracaoTexto,
        dataInicio: new Date(this.dataInicio).toISOString(),
        dataFim: new Date(this.dataFim).toISOString(),
        eventoId: this.eventoId,
      };
  
      if (this.atracaoEditando) {
        this.atracaoService.atualizarAtracao(this.atracaoEditando.id, atracao).subscribe({
          next: () => {
            console.log('Atração atualizada com sucesso!');
            this.carregarAtracoes();
            this.resetarFormulario();
          },
          error: (err) => {
            console.error('Erro ao atualizar atração:', err);
          },
        });
      } else {
        this.atracaoService.cadastrarAtracao(atracao).subscribe({
          next: () => {
            console.log('Atração salva com sucesso!');
            this.carregarAtracoes();
            this.resetarFormulario();
          },
          error: (err) => {
            console.error('Erro ao salvar atração:', err);
          },
        });
      }
    }
  }
  
  cancelarEdicao(): void {
    this.resetarFormulario();
  }
  
  resetarFormulario(): void {
    this.atracaoTexto = '';
    this.dataInicio = '';
    this.dataFim = '';
    this.atracaoEditando = null;
  }
  
}
