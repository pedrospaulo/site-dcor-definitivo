import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrassomComponent } from './ultrassom.component';

describe('UltrassomComponent', () => {
  let component: UltrassomComponent;
  let fixture: ComponentFixture<UltrassomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltrassomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltrassomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
