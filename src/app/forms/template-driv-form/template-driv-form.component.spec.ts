import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivFormComponent } from './template-driv-form.component';

describe('TemplateDrivFormComponent', () => {
  let component: TemplateDrivFormComponent;
  let fixture: ComponentFixture<TemplateDrivFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
