import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8080/api/feedbacks';

  constructor(private http: HttpClient) {}

  getFeedbackByEvento(eventoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?eventoId=${eventoId}`);
  }

  cadastrarFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }

  excluirFeedback(feedbackId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${feedbackId}`);
  }

  atualizarFeedback(id: number, feedback: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, feedback);
  }
}
