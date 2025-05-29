import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal, Toast } from 'bootstrap';
import Swal from 'sweetalert2';
import { TransportistaService } from '../../services/transportista.service';
import { Transportista } from '../../models/transportista';
import { UtiltyService } from '../../services/utilty.service';

@Component({
  selector: 'app-listar-transportista',
  standalone: false,
  templateUrl: './listar-transportista.component.html',
  styleUrl: './listar-transportista.component.css'
})
export class ListarTransportistaComponent {
  @ViewChild('modalTransportista') modal: ElementRef | undefined;


  VectorTransportistas: Transportista[] = []; //
  transportistaSeleccionado: Transportista | undefined = undefined;
  isNew: boolean = false;

  isLoading = false;// si lo pongo en true, aparece el spinner

  constructor(private _transportistaService: TransportistaService, private _util: UtiltyService) {
    this.LoadTransportistas();

  }
  LoadTransportistas() {
    this.isLoading = true;
    this._transportistaService.getTransportista()
      .subscribe((rs) => {
        this.VectorTransportistas = rs;
        this.isLoading = false;
      });

  }

  EditarTransportista(transportista: Transportista) {
    this._util.AbrirModal(this.modal);
    this.isNew = false;
    this.transportistaSeleccionado = transportista;

  }
  NuevoTransportista() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.transportistaSeleccionado = { IdTransportista: 0, Nombre: "", Email: " ", Telefono: 0, TipoCamion: " ", CapacidadCarga: 0, TransporteComestibles: false, Estibas: false };
  }
  GuardarTransportista() {
    if (this.isNew) {
      this._transportistaService.createTransportista(this.transportistaSeleccionado!)
        .subscribe({
          next: (rs) => {
            this.VectorTransportistas.push(rs);
            this.transportistaSeleccionado = undefined;
            this._util.CerrarModal(this.modal);
            Swal.fire({
              title: 'Transportista creado correctamente',
              icon: 'success'
            });
          },
          error: () => {
            Swal.fire({
              title: 'Error al crear transportista',
              icon: 'error'
            });
          }
        });
    } else {
      this._transportistaService.updateTransportista(
        this.transportistaSeleccionado!.IdTransportista,
        this.transportistaSeleccionado!
      ).subscribe({
        next: () => {
          this.transportistaSeleccionado = undefined;
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
      });
    }
  }
  EliminarTransportista(tr: Transportista) {
    Swal.fire(
      {
        icon: 'question',
        title: `¿Estás seguro de eliminar el transportista? '${tr.Nombre}'?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: 'No,conservar',
        confirmButtonText: 'Si, eliminar',
        allowOutsideClick: false,
        buttonsStyling: false,
        reverseButtons: true,

        customClass: {
          cancelButton: 'btn btn-secondary me-1',
          confirmButton: 'btn btn-danger'
        }
      })
      .then(rs => {
        if (rs.isConfirmed) {
          this._transportistaService.deleteTransportista(tr.IdTransportista)
            .subscribe({
              next: () => {
                Swal.fire({
                  title: 'Transportista eliminado correctamente',
                  icon: 'success'
                });
              },
              error: () => {
                Swal.fire({
                  title: 'Hubo un error, no se pudo eliminar los datos',
                  icon: 'error'
                });
              }
            })

        }
      })
  }

  mostrarToast() {
    this._util.showToaster('Mensaje Prueba', 2, 'danger');
  }

}
