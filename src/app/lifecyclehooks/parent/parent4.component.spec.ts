import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthooksComponent } from './parent4.component';
import { Child8Component } from '../child/child8.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Parent4Component', () => {
  let component: ParenthooksComponent;
  let fixture: ComponentFixture<ParenthooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParenthooksComponent,
        Child8Component ],
        imports: [
          MatInputModule,
          FormsModule,
          BrowserAnimationsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenthooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
