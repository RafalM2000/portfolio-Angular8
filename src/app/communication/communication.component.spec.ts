import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComponent } from './communication.component';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

describe('CommunicationComponent', () => {
  let component: CommunicationComponent;
  let fixture: ComponentFixture<CommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunicationComponent,
        ParentComponent,
        ChildComponent,
        Parent2Component,
        Child2Component
         ],
        imports: [
          BrowserAnimationsModule,
          MatCardModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
