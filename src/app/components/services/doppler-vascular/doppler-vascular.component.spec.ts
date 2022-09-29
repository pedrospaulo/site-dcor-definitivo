import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopplerVascularComponent } from './doppler-vascular.component';

describe('DopplerVascularComponent', () => {
  let component: DopplerVascularComponent;
  let fixture: ComponentFixture<DopplerVascularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DopplerVascularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DopplerVascularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
