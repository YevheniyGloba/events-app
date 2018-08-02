import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create event form here]</h3>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="submit" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  `
})
export class CreateEventComponent implements OnInit {

  constructor(private route: Router) {}
  ngOnInit() {

  }

  cancel() {
    this.route.navigate(['/events']);
  }
}
