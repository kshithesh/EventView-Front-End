import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventTypeService {
  private baseUrl = 'http://localhost:8080/event/type';

  constructor(private http: HttpClient) { }

  getEventType(eventTypeId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${eventTypeId}`);
  }

  createEventType(eventtype: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,eventtype);
  }

  updateEventType(eventTypeId: number, value:any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${eventTypeId}`,value);
  }

  deleteEventType(eventTypeId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${eventTypeId}`);
  }

  getEventTypesList(): Observable<any> {
    return this.http.get('http://localhost:8080/event/types');
  }
}
