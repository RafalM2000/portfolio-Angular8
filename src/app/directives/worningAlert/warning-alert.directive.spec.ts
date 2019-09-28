import { WarningAlertDirective } from './warning-alert.directive';

describe('WarningAlertDirective', () => {
  it('should create an instance', () => {
    const elRefMock = {
      nativeElement: document.createElement('div')
      };
    const directive = new WarningAlertDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
