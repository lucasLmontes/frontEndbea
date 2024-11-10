// parcerias.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParceriasService {
  private apiUrl = 'http://localhost:8080/api/parcerias';  // URL da API do backend

  constructor(private http: HttpClient) { }

  // Método para buscar todas as parcerias
  getParcerias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
