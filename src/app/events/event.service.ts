import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8080/event';

  constructor(private http: HttpClient) { }

  getEvent(eventId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${eventId}`);
  }

  createEvent(event: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`,event);
  }

  updateEvent(eventId: number, value:any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${eventId}`,value);
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${eventId}`);
  }

  getEventsList(): Observable<any> {
    return this.http.get('http://localhost:8080/events');
  }
}