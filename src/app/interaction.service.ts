import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  activatedEmitter = new EventEmitter<string>();
  dataConversion = '';

  constructor() { }

  messageViewer(data) {
  this.dataConversion = 'The best city to live is  ' + data.cityName;
  this.activatedEmitter.emit(this.dataConversion);
  }

}
