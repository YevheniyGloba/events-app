import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event = {
    name: 'My angular event',
    id: 123,
    price: 123.33,
    date: '9/12/2018',
    location: {
      address: 'volodymyr str 123',
      city: 'Kyiv',
      country: 'Ukraine'
    }
  };

  constructor() { }

  ngOnInit() {
  }
  handleEventClicked(data) {
    console.log(data);
  }

}
