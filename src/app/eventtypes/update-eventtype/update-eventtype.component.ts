import { Component, OnInit } from '@angular/core';
import { EventTypes } from "../eventtypes";
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypeService } from '../eventtype.service';

@Component({
  selector: 'app-update-eventtype',
  templateUrl: './update-eventtype.component.html',
  styleUrls: ['./update-eventtype.component.css']
})
export class UpdateEventtypeComponent implements OnInit {

  eventTypeId: number;
  eventType: EventTypes;

  constructor(private route: ActivatedRoute, private router: Router,
    private eventTypeService: EventTypeService) { }

  ngOnInit(): void {
    this.eventType = new EventTypes();

    this.eventTypeId = this.route.snapshot.params['eventTypeId'];

    this.eventTypeService.getEventType(this.eventTypeId)
    .subscribe(data=> {
      console.log(data)
      this.eventType = data;
    }, error=> console.log(error));
  }

  updateEventType() {
    this.eventTypeService.updateEventType(this.eventTypeId,this.eventType)
    .subscribe(data=> console.log(data), error=> console.log(error));
    this.eventType = new EventTypes();
    this.gotoList();
  }

  onSubmit() {
    this.updateEventType();
  }
  gotoList() {
    this.router.navigate(['/event/types']);
  }
}