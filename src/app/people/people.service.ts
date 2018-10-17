import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPeople} from './people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _peopleUrl = 'https://swapi.co/api/people/';

  constructor(private _http: HttpClient) {}

  getPeople(): Observable<IPeople[]> {
    return this._http.get<IPeople[]>(this._peopleUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  constructor() { }
}
