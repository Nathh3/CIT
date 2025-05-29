import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    apiBase = '';

    constructor(private _http: HttpClient) {
        this.apiBase = environment.urlApiBase + 'cliente';
    }

    getclientes(): Observable<Cliente[]> {
        return this._http.get<Cliente[]>(this.apiBase);
    }

    deleteCliente(id: number): Observable<Cliente> {
        return this._http.delete<Cliente>(this.apiBase + '/' + id);
    }

    createClient(cliente: Cliente): Observable<Cliente>{
        return this._http.post<Cliente>(this.apiBase , cliente);

    }

    updateCliente(id: number , cliente: Cliente): Observable<Cliente>{
        return this._http.put<Cliente>(this.apiBase, cliente)
    }
}
