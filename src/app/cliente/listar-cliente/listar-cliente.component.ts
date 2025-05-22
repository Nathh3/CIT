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

    // { id: 1, nombre: "Nathalia", email: "natha@email.com", telefono: "345671"},
    // { id: 2, nombre: "Sebastian", email: "sebas@email.com	", telefono: "769021" }
  ]; //vector creado del tipo cliente, estoy simulando objetos que me llegan de la API

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

  //cree un objeto nuevo y vacio
  NuevoCliente() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.clienteSeleccionado = {
      IdCliente: 0, Nombre: "", Email: "", Telefono: ""
    };

  }

  GuardarCliente() {
    if (this.isNew) {
      this.VectorClientes.push(this.clienteSeleccionado!); // llama una API para BD
      this.clienteSeleccionado = undefined;
      this._util.CerrarModal(this.modal)
    } else {
      this.clienteSeleccionado = undefined;
      this._util.CerrarModal(this.modal)

    }

    Swal.fire({
      title: "Cambios guardados correctamente",
      icon: "success"
    })
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
                title: "Cliente eliminado correctamente",
                icon: 'success'
              })
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



