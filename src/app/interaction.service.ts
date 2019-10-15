import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  dataConversion = '';

  constructor() { }

  messageViewer(data) {
  this.dataConversion = 'The best city to live is  ' + data.cityName;
  }

}
