import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonometricoComponent } from './ergonometrico.component';

describe('ErgonometricoComponent', () => {
  let component: ErgonometricoComponent;
  let fixture: ComponentFixture<ErgonometricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgonometricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErgonometricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
