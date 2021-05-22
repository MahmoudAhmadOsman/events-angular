import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-events',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

 
  public listOfEvents = [];
  
  //show loading spinner
  public loading = true;
  constructor(private events: EventsService) {
    
    events.getEventList().subscribe(data => {

      this.listOfEvents = data.events
      console.log(data);
      this.loading = false;

    }, (err) => {
      console.log(err);
      this.loading = true;
    })
  }

  ngOnInit(): void {
  }

}
