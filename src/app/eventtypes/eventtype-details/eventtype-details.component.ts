import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../eventtypes';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeService } from '../eventtype.service';

@Component({
  selector: 'app-eventtype-details',
  templateUrl: './eventtype-details.component.html',
  styleUrls: ['./eventtype-details.component.css']
})
export class EventtypeDetailsComponent implements OnInit {

  eventTypeId: number;
  eventTypes: EventTypes;

  constructor(private route: ActivatedRoute, private router: Router,
    private eventTypeService: EventTypeService) { }

  ngOnInit(): void {
    this.eventTypes = new EventTypes();

    this.eventTypeId = this.route.snapshot.params['eventTypeId'];

    this.eventTypeService.getEventType(this.eventTypeId)
    .subscribe(data=> {
      console.log(data)
      this.eventTypes =data;
    }, error=> console.log(error));
  }

  list() {
    this.router.navigate(['event/types']);
  }

}
