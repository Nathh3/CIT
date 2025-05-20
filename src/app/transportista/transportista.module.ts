import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTransportistaComponent } from './listar-transportista/listar-transportista.component';
import { RouterModule, Routes } from '@angular/router';
import { CuTransportistaComponent } from './cu-transportista/cu-transportista.component';
import { FormsModule } from '@angular/forms';
const ROUTES: Routes = [
  {
    path: '',
    component: ListarTransportistaComponent
  }
]


@NgModule({
  declarations: [
    ListarTransportistaComponent,
    CuTransportistaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class TransportistaModule { }
