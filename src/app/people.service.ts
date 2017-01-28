import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getPeople() {
    return this.http.get(`http://swapi.co/api/people`)
      .do(console.log)
      .map(response => response.json().results);
  }
}
