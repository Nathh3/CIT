import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrabajoComponent } from './listar-trabajo.component';

describe('ListarTrabajoComponent', () => {
  let component: ListarTrabajoComponent;
  let fixture: ComponentFixture<ListarTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
