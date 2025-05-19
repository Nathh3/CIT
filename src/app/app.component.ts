import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UtiltyService } from './services/utilty.service';
import { ToasterModel } from './models/core/toaster.model';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild("toaster") toaster: ElementRef | undefined;

  toasterData: ToasterModel | undefined;

  constructor(private router: Router, private util: UtiltyService) {

  }
  ngOnInit(): void {
    this.util.toaster$
      .subscribe((data) => {
        this.toasterData = data;
        let autohide = (data.delay > 0);
        const toast = Toast.getOrCreateInstance(this.toaster?.nativeElement,
          { animation: true, autohide, delay: data.delay })
        toast.show()
      })
  }

  isLoginRoute(): boolean {
    return this.router.url == '/login'
  }
  title = 'crudProyect';
}
