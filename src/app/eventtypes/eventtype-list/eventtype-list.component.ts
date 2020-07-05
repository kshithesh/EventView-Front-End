import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../eventtypes';
import { Observable } from 'rxjs';
import { EventTypeService } from '../eventtype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventtype-list',
  templateUrl: './eventtype-list.component.html',
  styleUrls: ['./eventtype-list.component.css']
})
export class EventtypeListComponent implements OnInit {

  eventTypes: Observable<EventTypes[]>;

  constructor(private eventTypeService: EventTypeService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.eventTypes = this.eventTypeService.getEventTypesList();
  }

  deleteEventType(eventTypeId: number) {
    if(window.confirm('Are sure you want to delete this item ?')){
    this.eventTypeService.deleteEventType(eventTypeId).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    }
  }

  eventTypeDetails(eventTypeId: number) {
    this.router.navigate(['event/type/details', eventTypeId]);
  }

  updateEventType(eventTypeId: number) {
    this.router.navigate(['event/type/update', eventTypeId]);
  }
  createEventType() {
    this.router.navigate(['event/type/new']);
  }
}