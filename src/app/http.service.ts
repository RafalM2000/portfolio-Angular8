import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjData } from './objData';


@Injectable({
  providedIn: 'root'

})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPictures() {
    return this.http.get<ObjData>('./assets/file.json');
  }
}
