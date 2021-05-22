import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

  //  public listOfEvents = [];
   public listOfEvents = [];
  constructor(private events: EventsService) {
    
    events.getEventList().subscribe(data => {

      this.listOfEvents = data.events
      
      console.log(data);

    }, (err) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
