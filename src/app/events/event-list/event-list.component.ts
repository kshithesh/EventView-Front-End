import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from "../event.service";
import { EventsCustom } from "../eventscustom";
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  eventsCustom: Observable<EventsCustom[]>;

  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.eventsCustom = this.eventService.getEventsList();
  }

  deleteEvent(eventId: number) {
    this.eventService.deleteEvent(eventId).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  eventDetails(eventId: number) {
    this.router.navigate(['event/details', eventId]);
  }

  updateEvent(eventId: number) {
    this.router.navigate(['event/update', eventId]);
  }
  createEvent() {
    this.router.navigate(['event/new']);
  }
}
