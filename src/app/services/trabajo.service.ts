import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Trabajo } from '../models/trabajo';

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
}


