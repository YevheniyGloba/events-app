import {Routes} from '@angular/router';

import {EventsListComponent} from './app/events-list/events-list.component';
import {EventDetailsComponent} from './app/events-list/event-details/event-details.component';
import {CreateEventComponent} from './app/events-list/create-event.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
