import { Component, OnInit } from '@angular/core';
import { Events } from "../events";
import { EventService } from "../event.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  events: Events = new Events();
  submitted = false;

  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newEvent() : void {
    this.submitted = false;
    this.events = new Events();
  }

  save() {
    this.eventService.createEvent(this.events)
    .subscribe(data=> console.log(data), error=> console.log(error));
    this.events = new Events();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/events']);
  }
}
