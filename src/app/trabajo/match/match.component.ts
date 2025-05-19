import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListarTrabajoComponent } from '../listar-trabajo/listar-trabajo.component';
import { Trabajo } from '../../models/trabajo';
import modal from 'bootstrap/js/dist/modal';
import Modal from 'bootstrap/js/dist/modal';
import { UtiltyService } from '../../services/utilty.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-match',
  standalone: false,

  templateUrl: './match.component.html',
  styleUrl: './match.component.css'
})
export class MatchComponent {

  @ViewChild('modalMatch') modalTrabajo!: ElementRef;

  _trabajoSeleccionado: Trabajo | undefined;

  isNew: boolean = false;
  vectorMatch: Trabajo[] = [
    {
      idTrabajo: 13, idCliente: 24, idTransportista: 32, lugarOrigen: "Medellin", lugarDestino: "Cali",
      fechaRecogida: new Date(), fechaEntrega: new Date(), TipoCamionRequerido: "LTL", pesoCarga: 678,
      transporteComestibles: true, estibas: false
    },
    {
      idTrabajo: 25, idCliente: 18, idTransportista: 45, lugarOrigen: "Bogotá", lugarDestino: "Barranquilla",
      fechaRecogida: new Date(), fechaEntrega: new Date(), TipoCamionRequerido: "FTL", pesoCarga: 1250,
      transporteComestibles: false, estibas: true
    },

  ];

  constructor(private _util: UtiltyService) {

  }

  verMas(trabajo: Trabajo) {
    this.isNew = true;
    this._trabajoSeleccionado = trabajo!;

    this._util.AbrirModal(this.modalTrabajo);
  }

  ConfirmarTrabajo() {
    Swal.fire({
      title: "Trabajo confirmado correctamente",
      icon: 'success'
    })


  }


}
