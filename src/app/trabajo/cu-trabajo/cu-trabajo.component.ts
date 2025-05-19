import { Component, Input, input } from '@angular/core';
import { Trabajo } from '../../models/trabajo';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-trabajo',
  standalone: false,
  templateUrl: './cu-trabajo.component.html',
  styleUrl: './cu-trabajo.component.css'
})
export class CuTrabajoComponent {
  @Input() trabajo: Trabajo | undefined;

  formatDateTimeLocal(fecha: Date) {
    let formateada = fecha.toISOString().slice(0, 16);
    return formateada;
  };
  updateDate(valor: string) {
    this.trabajo!.fechaEntrega = new Date(valor);
    this.trabajo!.fechaRecogida = new Date(valor);
  }

}

