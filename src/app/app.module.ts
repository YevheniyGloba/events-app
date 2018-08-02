import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-list/events-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './events-list/shared/event.service';
import {EventDetailsComponent} from './events-list/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {CreateEventComponent} from './events-list/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
