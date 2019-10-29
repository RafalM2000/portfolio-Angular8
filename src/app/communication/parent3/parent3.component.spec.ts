import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Child7Component } from '../child7/child7.component';

import { Parent3Component } from './parent3.component';

describe('Parent3Component', () => {
  let component: Parent3Component;
  let fixture: ComponentFixture<Parent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Parent3Component,
        Child7Component
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
