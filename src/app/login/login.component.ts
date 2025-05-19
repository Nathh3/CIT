
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UtiltyService } from '../services/utilty.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usr: string = "";
  pwd: string = "";

  constructor(private _utiltyService: UtiltyService, private router: Router) {
  }

  login() {
    this._utiltyService.Login(this.usr, this.pwd)
      .subscribe(rs => {
        if (rs) {
          this.router.navigate(['/']);
        } else {
          Swal.fire({
            title: 'Usuario y/o contraseña incorrecta',
            icon: 'error'
          })
        }
      })
  }

}
