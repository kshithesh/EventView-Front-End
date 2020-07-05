import { Component, OnInit } from '@angular/core';
import { EventsCustom} from '../eventscustom'
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from "../event.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId: number;
  eventsCustom: EventsCustom;

  constructor(private route: ActivatedRoute, private router: Router,
    private eventService: EventService) { }

  ngOnInit(): void {
    this.eventsCustom = new EventsCustom();

    this.eventId = this.route.snapshot.params['eventId'];

    this.eventService.getEvent(this.eventId)
    .subscribe(data=> {
      console.log(data)
      this.eventsCustom =data;
    }, error=> console.log(error));
  }

  list() {
    this.router.navigate(['events']);
  }

}
