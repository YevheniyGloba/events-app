import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Price: \${{event.price}}</div>
      <div>Location:
        <span class="pad-left">{{event.location.city}}</span>
        <span>{{event.location.address}}</span>
      </div>
    </div>
  `,
  styles: [`
  .pad-left { margin-left: 20px}
  .well div { color: aqua }
  .thumbnail {min-height: 210px}
  `]
})
export class EventsThumbnailComponent {
  @Input() event: IEvent;

}
