import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuTrabajoComponent } from './cu-trabajo.component';

describe('CuTrabajoComponent', () => {
  let component: CuTrabajoComponent;
  let fixture: ComponentFixture<CuTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
