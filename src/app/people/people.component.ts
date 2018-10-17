import { Component, OnInit } from '@angular/core';
import {IPeople} from './people';
import { PeopleService } from './people.service';


@Component({
  selector: 'pm-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  pageTitle = `Star Wars People`;
  people: IPeople[];

  constructor(private _peopleService: PeopleService) { }

  ngOnInit(): void {
    this._peopleService.getPeople()
      .subscribe(people => {
      this.people = people.results;
      },
        error => this.errorMessage = <any>error);
  })
}
