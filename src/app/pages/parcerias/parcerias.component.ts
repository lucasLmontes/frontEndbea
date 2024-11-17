import { Component, OnInit } from '@angular/core';
import { ParceriasService } from '../../services/parcerias/parcerias.service';

@Component({
  selector: 'app-parcerias',
  templateUrl: './parcerias.component.html',
  styleUrls: ['./parcerias.component.css']
})
export class ParceriasComponent implements OnInit {
  parcerias: any[] = [];

  constructor(private parceriasService: ParceriasService) { }

  ngOnInit(): void {
    this.parceriasService.getParcerias().subscribe(
      (data) => {
        this.parcerias = data;
      },
      (error) => {
        console.error('Erro ao buscar parcerias:', error);
      }
    );
  }
}
