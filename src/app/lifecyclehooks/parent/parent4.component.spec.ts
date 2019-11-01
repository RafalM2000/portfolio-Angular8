import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthooksComponent } from './parent4.component';

describe('Parent4Component', () => {
  let component: ParenthooksComponent;
  let fixture: ComponentFixture<ParenthooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenthooksComponent ]
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
