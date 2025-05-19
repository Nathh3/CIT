import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTrabajoComponent } from './listar-trabajo/listar-trabajo.component';
import { RouterModule, Routes } from '@angular/router';
import { CuTrabajoComponent } from './cu-trabajo/cu-trabajo.component';
import { FormsModule } from '@angular/forms';
import { MatchComponent } from './match/match.component';


const ROUTES: Routes =[
  {
    path:'',
    component: ListarTrabajoComponent
  },
  {
    path:'match',
    component: MatchComponent

  }

]

@NgModule({
  declarations: [
    ListarTrabajoComponent,
    CuTrabajoComponent,
    MatchComponent // nombre del componente que cree
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class TrabajoModule { }
