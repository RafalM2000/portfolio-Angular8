import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interaction2Service {
  activatedEmitter = new Subject<string>();
  dataConversion = '';

  constructor() { }

  messageViewer(data) {
    this.dataConversion = 'The best city to live is  ' + data.cityName;
    this.activatedEmitter.next(this.dataConversion);
    }
}
