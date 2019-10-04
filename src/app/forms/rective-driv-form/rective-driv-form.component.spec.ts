import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveDrivFormComponent } from './rective-driv-form.component';

describe('RectiveDrivFormComponent', () => {
  let component: RectiveDrivFormComponent;
  let fixture: ComponentFixture<RectiveDrivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectiveDrivFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectiveDrivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
