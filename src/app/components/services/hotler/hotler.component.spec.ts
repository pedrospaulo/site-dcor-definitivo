import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlerComponent } from './hotler.component';

describe('HotlerComponent', () => {
  let component: HotlerComponent;
  let fixture: ComponentFixture<HotlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
