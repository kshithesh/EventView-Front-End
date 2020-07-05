import { Component, OnInit } from '@angular/core';
import { EventTypes } from '../eventtypes';
import { EventTypeService } from '../eventtype.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-eventtype',
  templateUrl: './create-eventtype.component.html',
  styleUrls: ['./create-eventtype.component.css']
})
export class CreateEventtypeComponent implements OnInit {
  eventType: EventTypes = new EventTypes();
  submitted = false;

  constructor(private eventTypeService: EventTypeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newUser() : void {
    this.submitted = false;
    this.eventType = new EventTypes();
  }

  save() {
    this.eventTypeService.createEventType(this.eventType)
    .subscribe(data=> console.log(data), error=> console.log(error));
    this.eventType = new EventTypes();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/event/types']);
  }
}
