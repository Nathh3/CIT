import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transportista } from '../models/transportista';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportistaService {

  apiBase = '';

  constructor(private _http: HttpClient) {
    this.apiBase = environment.urlApiBase + 'transportista';
  }

  getTransportista(): Observable<Transportista[]> {
    return this._http.get<Transportista[]>(this.apiBase + '/');
  }

  deleteTransportista(id: number): Observable<Transportista> {
    return this._http.delete<Transportista>(this.apiBase + '/' + id);
  }

  createTransportista(transportista: Transportista): Observable<Transportista> {
    return this._http.post<Transportista>(this.apiBase, transportista);

  }

  updateTransportista(id: number, transportista: Transportista): Observable<Transportista> {
    return this._http.put<Transportista>(this.apiBase + '/' + id, transportista)
  }

}
