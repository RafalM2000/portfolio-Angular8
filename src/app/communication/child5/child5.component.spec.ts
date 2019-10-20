import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { Child5Component } from './child5.component';

describe('Child5Component', () => {
  let component: Child5Component;
  let fixture: ComponentFixture<Child5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child5Component ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
