import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComponent } from './communication.component';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { Child5Component } from './child5/child5.component';
import { Child6Component } from './child6/child6.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

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
        Child2Component,
        Child3Component,
        Child4Component,
        Child5Component,
        Child6Component
         ],
        imports: [
          BrowserAnimationsModule,
          MatCardModule,
          FormsModule,
          MatInputModule
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
