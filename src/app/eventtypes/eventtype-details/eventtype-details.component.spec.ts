import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtypeDetailsComponent } from './eventtype-details.component';

describe('EventtypeDetailsComponent', () => {
  let component: EventtypeDetailsComponent;
  let fixture: ComponentFixture<EventtypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventtypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventtypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
