import { Component, Input } from '@angular/core';
import { Transportista } from '../../models/transportista';
import { format } from 'date-fns-tz';


@Component({
  selector: 'app-cu-transportista',
  standalone: false,
  templateUrl: './cu-transportista.component.html',
  styleUrl: './cu-transportista.component.css'
})
export class CuTransportistaComponent {
@Input() transportista: Transportista | undefined;

formatDateTimeLocal(fecha:Date){
let fechaFormateada = format(fecha,"yyyy-MM-dd'T'HH:mm",{timeZone:"America/Bogota"});
return fechaFormateada;
}
// updateDate(valor:string){
//   this.transportista!.fechaDisponible = new Date(valor);
// }
}
