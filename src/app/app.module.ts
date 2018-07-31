import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsThumbnailComponent } from './events-list/events-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
