import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Event } from './../models/event';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
 
//  private baseUrl = "/assets/data/events.json";
 private baseUrl = "https://blogs-api.herokuapp.com/events/";
    constructor(private http: HttpClient) { }
  
 //Get Event List
   getEventList(): Observable<any> {
     return this.http.get<Event[]>(this.baseUrl)
   }
   
  
  //Get event by id
  // getEventById(id: number): Observable<Event> {
  //     //const baseUrl = "/assets/data/events.json";
  //   // return this.http.get<Event>(this.baseUrl + '/events/' + id);
  //   return this.http.get<Event>(this.baseUrl + id);
  // }
  
    getEventById(id: number) {
    return this.http.get("https://blogs-api.herokuapp.com/events/" + id);
  }
  
}
