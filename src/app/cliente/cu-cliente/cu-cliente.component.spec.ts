import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuClienteComponent } from './cu-cliente.component';

describe('CuClienteComponent', () => {
  let component: CuClienteComponent;
  let fixture: ComponentFixture<CuClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
