import { Component, OnInit } from '@angular/core';
import {EventService} from './shared/event.service';
import {IEvent} from './shared/event.model';

@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {

  events: IEvent[]

  constructor(private eventsService: EventService) {
  }

  ngOnInit() {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }
  handleEventClicked(data) {
    console.log(data);
  }

}
