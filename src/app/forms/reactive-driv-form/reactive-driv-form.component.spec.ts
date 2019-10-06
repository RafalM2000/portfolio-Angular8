import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveDrivFormComponent } from './reactive-driv-form.component';

describe('RectiveDrivFormComponent', () => {
  let component: ReactiveDrivFormComponent;
  let fixture: ComponentFixture<ReactiveDrivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDrivFormComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDrivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
