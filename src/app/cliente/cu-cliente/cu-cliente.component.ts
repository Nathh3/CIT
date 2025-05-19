import { Component, Input, input } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-cliente',
    standalone: false,
  templateUrl: './cu-cliente.component.html',
  styleUrl: './cu-cliente.component.css'
})
export class CuClienteComponent {
  @Input() cliente: Cliente | undefined;

  formatDateLocal(fecha: Date){
    let fechaFromateada = format(fecha,"yyyy-MM-dd'T'HH;mm",{timeZone:"America/Bogota"});
    return fechaFromateada;
    //cualquier cosa con fechas video 7 minuto 6:30
}
}