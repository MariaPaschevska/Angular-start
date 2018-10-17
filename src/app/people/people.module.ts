import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PeopleComponent} from './people.component';
import {PeopleService} from './people.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'people', component: PeopleComponent }
    ]),
    CommonModule
  ],
  declarations: [
    PeopleComponent
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
