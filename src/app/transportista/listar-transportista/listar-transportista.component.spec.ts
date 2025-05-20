import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransportistaComponent } from './listar-transportista.component';

describe('ListarTransportistaComponent', () => {
  let component: ListarTransportistaComponent;
  let fixture: ComponentFixture<ListarTransportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTransportistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
