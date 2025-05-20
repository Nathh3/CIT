import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transportista } from '../models/transportista';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportistaService {

  apiBase='';

  constructor(private _http:HttpClient) { 
    this.apiBase= environment.urlApiBase + 'transportista';
  }

  getTransportistas(): Observable<Transportista[]> {
    return this._http.get<Transportista[]>(this.apiBase+'/');
  }
}
