import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { HooksComponent } from './hooks.component';
import { ParenthooksComponent } from '../parent/parent4.component';
import { Child8Component } from '../child/child8.component';

describe('HooksComponent', () => {
  let component: HooksComponent;
  let fixture: ComponentFixture<HooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HooksComponent,
        ParenthooksComponent,
        Child8Component ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
