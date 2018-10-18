import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _peopleUrl = 'https://swapi.co/api/people/';

  constructor(private _http: HttpClient) {}

  getPeople(): Observable<any> {
    return this._http.get<any>(this._peopleUrl)
      .do(data => console.log('People service is here: data.results ' + JSON.stringify(data.results)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
