import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Trabajo } from '../../models/trabajo';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { UtiltyService } from '../../services/utilty.service';
import { TrabajoService } from '../../services/trabajo.service';

@Component({
  selector: 'app-listar-trabajo',
  standalone: false,
  templateUrl: './listar-trabajo.component.html',
  styleUrl: './listar-trabajo.component.css'
})
export class ListarTrabajoComponent {
  @ViewChild('modalTrabajo') modal: ElementRef | undefined;

  VectorTrabajo: Trabajo[] = [
    // {
    //   idTrabajo: 13, idCliente: 24, idTransportista: 32, lugarOrigen: "Medellin", lugarDestino: "Cali",
    //   fechaRecogida: new Date(), fechaEntrega: new Date(), TipoCamionRequerido: "LTL", pesoCarga: 678,
    //   transporteComestibles: true, estibas: false
    // },
    // {
    //   idTrabajo: 25, idCliente: 18, idTransportista: 45, lugarOrigen: "Bogotá", lugarDestino: "Barranquilla",
    //   fechaRecogida: new Date(), fechaEntrega: new Date(), TipoCamionRequerido: "FTL", pesoCarga: 1250,
    //   transporteComestibles: false, estibas: true
    // },

  ];

  trabajoSeleccionado: Trabajo | undefined = undefined;
  isNew: boolean = false;
  isLoading = true;

    constructor(private _util: UtiltyService, private _trabajoService: TrabajoService){

    }

    LoadTrabajo(){
    this.isLoading =true;
    this._trabajoService.getTrabajo()
    .subscribe((rs)=>{
      this.VectorTrabajo = rs;
      this.isLoading = false;
    });
  }

  EditarTrabajo(trabajo: Trabajo) {
    this._util.AbrirModal(this.modal);
    this.isNew = false;
    this.trabajoSeleccionado = trabajo;
  }

  NuevoTrabajo() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.trabajoSeleccionado = {
      idTrabajo: 0, idCliente: 0, idTransportista: 0, lugarOrigen: "", lugarDestino: "",
      fechaRecogida: new Date(), fechaEntrega: new Date(), TipoCamionRequerido: "", pesoCarga: 0, transporteComestibles: false, estibas: false
    }

  }

  GuardarTrabajo() {
    if (this.isNew) {
      this.VectorTrabajo.push(this.trabajoSeleccionado!);
      this.trabajoSeleccionado = undefined;
      this._util.CerrarModal(this.modal);
    } else {
      this.trabajoSeleccionado = undefined;
      this._util.CerrarModal(this.modal);
    }
    Swal.fire({title:'Trabajo guardado correctamente', icon: 'success'})
  }

  EliminarTrabajo(tr: Trabajo) {
    Swal.fire({
      icon: "question",
      title: `¿Está seguro de eliminar el trabajoe ${tr.idTrabajo}?`,
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "No, conservar",
      confirmButtonText: "Si, eliminar",
      allowOutsideClick: false,
      buttonsStyling: false,
      reverseButtons: true,

      customClass: {
        cancelButton: "btn btn-secondary me-1",
        confirmButton: "btn btn-danger"

      }

    }
    ).then(rs => {
      if (rs.isConfirmed) {
        //llamada a la API DELETE 
        Swal.fire({
          title: "Trabajo eliminado correctamente",
          icon: 'success'
        })
      }
    });

  }

  // CerrarModal(modal: ElementRef | undefined) {
  //   if (modal) {
  //     let bsModal = Modal.getInstance(modal?.nativeElement)
  //     bsModal?.hide();

  //     let backdrop = document.querySelector(".modal-backdrop.fade.show");
  //     if (backdrop) {
  //       backdrop.parentNode?.removeChild(backdrop);
  //     }

  //     document.body.removeAttribute('style');
  //     document.body.removeAttribute('class');
  //   }
  // }

  mostrarToast(){
    this._util.showToaster('Mensaje prueba', 2, 'warning');
  }

}
