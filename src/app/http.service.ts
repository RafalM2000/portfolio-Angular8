import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjData } from './objData';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'

})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get<ObjData>('./assets/animalsFile.json');
  }

  getAnimalDetails(animal) {
    return this.http
    .get<ObjData>('./assets/animalsDetailFile.json')
    .pipe(
      map(response => {
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            if (animal === response[key].animal) {
              return response[key].description;
            }
          }
        }
      }));
  }
}
