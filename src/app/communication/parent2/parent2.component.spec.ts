import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Child2Component } from '../child2/child2.component';

import { Parent2Component } from './parent2.component';

describe('Parent2Component', () => {
  let component: Parent2Component;
  let fixture: ComponentFixture<Parent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Parent2Component,
        Child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
