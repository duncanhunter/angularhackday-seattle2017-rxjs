import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  template: `
    <p *ngFor="let person of people$ | async">{{person.name}}</p>
  `,
})
export class AppComponent {
  people$: Observable<any>;

  constructor(private peopleService: PeopleService) {
    this.getPeople();
  }

  getPeople() {
    this.people$ = this.peopleService.getPeople();
  }
}
