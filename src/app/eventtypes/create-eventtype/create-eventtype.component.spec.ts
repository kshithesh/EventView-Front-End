import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventtypeComponent } from './create-eventtype.component';

describe('CreateEventtypeComponent', () => {
  let component: CreateEventtypeComponent;
  let fixture: ComponentFixture<CreateEventtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEventtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
