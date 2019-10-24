import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjData } from './objData';


@Injectable({
  providedIn: 'root'

})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get<ObjData>('./assets/animalsFile.json');
  }

  getAnimalDetails() {
    return this.http.get<ObjData>('./assets/animalsDetailFile.json');
  }
}
