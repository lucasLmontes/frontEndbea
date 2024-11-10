// parcerias.component.ts
import { Component, OnInit } from '@angular/core';
import { ParceriasService } from '../../services/parcerias/parcerias.service';  // Importando o serviço

@Component({
  selector: 'app-parcerias',
  templateUrl: './parcerias.component.html',
  styleUrls: ['./parcerias.component.css']
})
export class ParceriasComponent implements OnInit {
  parcerias: any[] = [];

  constructor(private parceriasService: ParceriasService) { }

  ngOnInit(): void {
    // Chama o serviço para buscar as parcerias
    this.parceriasService.getParcerias().subscribe(
      (data) => {
        this.parcerias = data;  // Armazena as parcerias recebidas
      },
      (error) => {
        console.error('Erro ao buscar parcerias:', error);
      }
    );
  }
}
