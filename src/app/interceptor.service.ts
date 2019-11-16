import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InterceptorsHttpService {

  constructor(private http: HttpClient) { }

  getData() {
    const gitHubUser = 'RafalM2000';
    return this.http.get<any>(`https://api.github.com/users/${gitHubUser}`);
  }
}
