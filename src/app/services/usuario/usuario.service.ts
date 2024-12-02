import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:4200/api/usuarios';

  constructor(private http: HttpClient) {}

  createUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.post<Usuario>(this.apiUrl, usuario, { headers });
  }

  login(email: string, senha: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<string>(`${this.apiUrl}/login`, { email, senha }, { headers });
  }
  
}