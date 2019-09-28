import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStageComponent } from './main-stage.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainStageComponent', () => {
  let component: MainStageComponent;
  let fixture: ComponentFixture<MainStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ MainStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
