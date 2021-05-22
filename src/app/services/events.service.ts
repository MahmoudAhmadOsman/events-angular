import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

    constructor(private http: HttpClient) { }
  
   getEventList(): Observable<any> {
    const baseUrl = "/assets/data/events.json";
     return this.http.get(baseUrl)
       
  }
}
