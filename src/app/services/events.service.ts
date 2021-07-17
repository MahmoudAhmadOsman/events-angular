import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Event } from './../models/event';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
 
 //private baseUrl:string = "/assets/data/events.json";


  private baseUrl = "https://blogs-api.herokuapp.com/events/";
  
    constructor(private http: HttpClient) { }

 //Get Event List from remote server
   getEventList(): Observable<any> {
      return this.http.get<Event[]>(this.baseUrl);
     
   }
   
   //Get data from local data json file
  //  getEventList(): Observable<Event[]> {
  //    return this.http.get<Event[]>(this.baseUrl); 
  // }
  
  
  //Remote Json file
    getEventById(id: number) {
    return this.http.get("https://blogs-api.herokuapp.com/events/" + id);
  }
  
  //    getEventById(id: number) {
  //       return this.http.get(this.baseUrl + id);
  // }
}
