import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ReactiveDrivFormComponent } from './reactive-driv-form/reactive-driv-form.component';
import { ReactiveDrivFormTwoComponent } from './reactive-driv-form-two/reactive-driv-form-two.component';
import { TemplateDrivFormComponent } from './template-driv-form/template-driv-form.component';

import { FormsComponent } from './forms.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormsComponent,
        ReactiveDrivFormComponent,
        ReactiveDrivFormTwoComponent,
        TemplateDrivFormComponent ],
      imports: [
      BrowserAnimationsModule,
      MatCardModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
