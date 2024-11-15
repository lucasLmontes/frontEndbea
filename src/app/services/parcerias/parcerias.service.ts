import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParceriasService {
  private apiUrl = 'http://localhost:8080/api/parcerias';

  constructor(private http: HttpClient) { }

  getParcerias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
