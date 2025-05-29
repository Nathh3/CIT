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

  VectorTrabajo: Trabajo[] = [];

  trabajoSeleccionado: Trabajo | undefined = undefined;
  isNew: boolean = false;
  isLoading = true;

  constructor(private _util: UtiltyService, private _trabajoService: TrabajoService) {
    this.LoadTrabajo();

  }

  LoadTrabajo() {
    this.isLoading = true;
    this._trabajoService.getTrabajo()
      .subscribe((rs) => {
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
      fechaRecogida: new Date(), fechaEntrega: new Date(), TipoCamionRequerido: "", PesoCarga: 0, TransporteComestibles: false, Estibas: false
    }

  }

  GuardarTrabajo() {
    if (this.isNew) {
      this._trabajoService.createTrabajo(this.trabajoSeleccionado!).subscribe({
        next: (rs) => {
          this.VectorTrabajo.push(this.trabajoSeleccionado!);
          this.trabajoSeleccionado = undefined;
          this._util.CerrarModal(this.modal);
          Swal.fire({
            title: 'Trabajo creado correctamente',
            icon: 'success'
          });

        },
        error: () => {
          Swal.fire({
            title: 'Error al crear el transportista',
            icon: 'error'
          });
        }
      });

    } else {
      this._trabajoService.updateTrabajo(this.trabajoSeleccionado!.idTrabajo, this.trabajoSeleccionado!)
        .subscribe({
          next: () => {
            this.trabajoSeleccionado = undefined;
            this._util.CerrarModal(this.modal);
            Swal.fire({
              title: 'Cambios guardados correctamente',
              icon: 'success'
            });
          },
          error: () => {
            Swal.fire({
              title: 'Hubo un error, no se pudo cambiar los datos',
              icon: 'error'
            });
          }
        })
    }
  }

  EliminarTrabajo(trb: Trabajo) {
    Swal.fire({
      icon: "question",
      title: `¿Está seguro de eliminar el trabajoe ${trb.idTrabajo}?`,
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
        this._trabajoService.deleteTrabajo(trb.idTrabajo)
          .subscribe({
            next: () => {
              Swal.fire({
                title: 'Trabajo eliminado correctamente',
                icon: 'success'
              });
            },
            error: () => {
              Swal.fire({
                title: 'Hubo un error, no se pudo cambiar los datos',
                icon: 'error'
              });
            }
          })
      }
    });

  }

  mostrarToast() {
    this._util.showToaster('Mensaje prueba', 2, 'warning');
  }

}
