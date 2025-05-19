import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { CuClienteComponent } from './cu-cliente/cu-cliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

const ROUTES: Routes =[
  {
    path:'',
    component: ListarClienteComponent
  },
  // {
  //   path:'/match' para trabajo hago esta ruta
  // }
]

@NgModule({
  declarations: [
    ListarClienteComponent,
    CuClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class ClienteModule { }
