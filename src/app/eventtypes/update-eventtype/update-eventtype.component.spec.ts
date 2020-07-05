import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventtypeComponent } from './update-eventtype.component';

describe('UpdateEventtypeComponent', () => {
  let component: UpdateEventtypeComponent;
  let fixture: ComponentFixture<UpdateEventtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEventtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
