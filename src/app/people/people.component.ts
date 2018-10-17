import { Component, OnInit } from '@angular/core';
import {IPeople} from './people';


@Component({
  selector: 'pm-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  pageTitle = `Star Wars People`;
  people: IPeople[];

  constructor() { }

  ngOnInit() {
  }

}
