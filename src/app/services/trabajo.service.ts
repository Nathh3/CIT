import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Trabajo } from '../models/trabajo';
import { Transportista } from '../models/transportista';
import { aceptarTrabajo } from '../models/view-models/aceptar-trabajo.viewmodel';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  apiBase = '';

  constructor(private _http: HttpClient) {
    this.apiBase = environment.urlApiBase + 'trabajo';
  }

  getTrabajo(): Observable<Trabajo[]> {
    return this._http.get<Trabajo[]>(this.apiBase + '/');
  }

  deleteTrabajo(id: number): Observable<Trabajo> {
    return this._http.delete<Trabajo>(this.apiBase + '/' + id);
  }

  createTrabajo(trabajo: Trabajo): Observable<Trabajo> {
    return this._http.post<Trabajo>(this.apiBase, trabajo);

  }

  updateTrabajo(id: number, trabajo: Trabajo): Observable<Trabajo> {
    return this._http.put<Trabajo>(this.apiBase, trabajo)
  }

  getByTransportistaId(id:number): Observable<Trabajo[]> {
    return this._http.get<Trabajo[]>(this.apiBase + '/transportista/'+id)

  }

  aceptarTrabajo(aceptar: aceptarTrabajo): Observable<Trabajo> {
    return this._http.put<Trabajo>(this.apiBase + '/aceptar', aceptar)

}

}