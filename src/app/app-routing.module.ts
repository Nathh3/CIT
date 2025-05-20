import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'transportista',
    loadChildren: () => import('./transportista/transportista.module').then(m => m.TransportistaModule)

  },
  {
    path: 'clientes',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trabajo',
    loadChildren: () => import('./trabajo/trabajo.module').then(m => m.TrabajoModule)
  },
  {
    path: '**', redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
