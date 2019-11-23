import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { By } from 'protractor';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Home link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[0].textContent).toEqual('Home');
  }));

  it('should show Data binding link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[1].textContent).toEqual('Data binding');
  }));

  it('should show Directives link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[2].textContent).toEqual('Directives');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[3].textContent).toEqual('Pipes');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[4].textContent).toEqual('Forms');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[5].textContent).toEqual('Communication');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[6].textContent).toEqual('Http');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[7].textContent).toEqual('Lifecycle hooks');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[8].textContent).toEqual('Lazy module');
  }));

  it('should show Pipes link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('a')[9].textContent).toEqual('Interceptor');
  }));

});
