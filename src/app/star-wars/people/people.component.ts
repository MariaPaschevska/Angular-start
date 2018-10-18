import { Component, OnInit } from '@angular/core';
import {IPeople} from './people';
import { PeopleService } from './people.service';


@Component({
  selector: 'pm-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  errorMessage: string;
  pageTitle = `Star Wars People`;
  people: IPeople[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople()
      .subscribe(people => {
      this.people = people.results;
      },
        error => this.errorMessage = <any>error);
  }
}
