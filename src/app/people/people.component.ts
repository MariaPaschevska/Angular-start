import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  pageTitle = `Star Wars People`;

  constructor() { }

  ngOnInit() {
  }

}
