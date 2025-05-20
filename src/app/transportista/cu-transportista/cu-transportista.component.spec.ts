import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTransportistaComponent } from './cu-transportista.component';

describe('CuTransportistaComponent', () => {
  let component: CuTransportistaComponent;
  let fixture: ComponentFixture<CuTransportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuTransportistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
