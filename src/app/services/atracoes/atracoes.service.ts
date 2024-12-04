import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtracoesService {
  private apiUrl = 'http://localhost:8080/api/atracoes';

  constructor(private http: HttpClient) {}

  getAtracoesByEvento(eventoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?eventoId=${eventoId}`);
  }

  cadastrarAtracao(atracao: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, atracao);
  }

  excluirAtracao(atracaoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${atracaoId}`);
  }

  atualizarAtracao(id: number, atracao: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, atracao);
  }
  
  
}
