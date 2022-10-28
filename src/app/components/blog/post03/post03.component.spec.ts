import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post03Component } from './post03.component';

describe('Post03Component', () => {
  let component: Post03Component;
  let fixture: ComponentFixture<Post03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
