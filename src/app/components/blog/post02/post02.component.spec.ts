import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post02Component } from './post02.component';

describe('Post02Component', () => {
  let component: Post02Component;
  let fixture: ComponentFixture<Post02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
