import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../events';
import { EventService } from "../event.service";

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  eventId: number;
  events: Events;

  constructor(private route: ActivatedRoute, private router: Router,
    private eventService: EventService) { }

  ngOnInit(): void {
    this.events = new Events();

    this.eventId = this.route.snapshot.params['eventId'];

    this.eventService.getEvent(this.eventId)
    .subscribe(data=> {
      console.log(data)
      this.events = data;
    }, error=> console.log(error));
  }

  updateEvent() {
    this.eventService.updateEvent(this.eventId, this.events)
    .subscribe(data=> console.log(data), error=> console.log(error));
    this.events = new Events();
    this.gotoList();
  }

  onSubmit() {
    this.updateEvent();
  }
  gotoList() {
    this.router.navigate(['/events']);
  }
}
