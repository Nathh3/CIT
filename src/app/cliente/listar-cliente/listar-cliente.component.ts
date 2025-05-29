import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { Modal, Toast } from 'bootstrap';
import Swal from 'sweetalert2';
import { UtiltyService } from '../../services/utilty.service';
// import { Title } from '@angular/platform-browser';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  standalone: false,
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {
  @ViewChild('modalCliente') modal: ElementRef | undefined;

  VectorClientes: Cliente[] = [
  ];
  clienteSeleccionado: Cliente | undefined = undefined;
  isNew: boolean = false;
  isLoading = true;

  constructor(private _clienteService: ClienteService, private _util: UtiltyService) {
    this.LoadClientes();
  }

  LoadClientes() {
    this.isLoading = true;
    this._clienteService.getclientes()
      .subscribe((rs) => {
        this.VectorClientes = rs;
        this.isLoading = false;
      });
  }

  EditarCliente(cliente: Cliente) {
    this._util.AbrirModal(this.modal);
    this.isNew = false;
    this.clienteSeleccionado = cliente;
  }

  NuevoCliente() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.clienteSeleccionado = {
      IdCliente: 0, Nombre: "", Email: "", Telefono: ""
    };

  }

  GuardarCliente() {
    if (this.isNew) {
      this._clienteService.createClient(this.clienteSeleccionado!)
        .subscribe({
          next: (rs) => {
            this.VectorClientes.push(this.clienteSeleccionado!);
            this.clienteSeleccionado = undefined;
            this._util.CerrarModal(this.modal);
            Swal.fire({
              title: 'Cliente creado correctamente',
              icon: 'success'
            });
          },
          error: () => {
            Swal.fire({
              title: 'Error al crear el cliente',
              icon: 'error'
            });
          }
        })
    } else {
      this._clienteService.updateCliente(this.clienteSeleccionado!.IdCliente,
        this.clienteSeleccionado!)
        .subscribe({
          next: () => {
            this.clienteSeleccionado = undefined;
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

  EliminarCliente(cl: Cliente) {

    Swal.fire({
      icon: "question",
      title: `¿Está seguro de eliminar el/la cliente ${cl.Nombre}?`,
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
        this._clienteService.deleteCliente(cl.IdCliente)
          .subscribe({
            next: () => {
              Swal.fire({
                title: 'Cliente eliminado correctamente',
                icon: 'success'
              });
            },
            error: () => {
              Swal.fire({
                title: 'Hubo un error, no se pudo eliminarlos datos',
                icon: 'error'
              });
            }
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

  mostrarToast() {
    this._util.showToaster('Mensaje prueba', 2, 'warning');
  }

}



