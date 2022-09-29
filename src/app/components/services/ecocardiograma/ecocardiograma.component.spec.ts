import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcocardiogramaComponent } from './ecocardiograma.component';

describe('EcocardiogramaComponent', () => {
  let component: EcocardiogramaComponent;
  let fixture: ComponentFixture<EcocardiogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcocardiogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcocardiogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
