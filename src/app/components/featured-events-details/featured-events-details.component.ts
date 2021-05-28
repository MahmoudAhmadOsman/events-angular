import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featured-events-details',
  templateUrl: './featured-events-details.component.html',
  styleUrls: ['./featured-events-details.component.scss']
})
export class FeaturedEventsDetailsComponent implements OnInit {

  public eventDetails: any;
 
  constructor(private eventsService: EventsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showEventDetails();
  }

//Show event by id
   showEventDetails() {
    console.log("Pramiterized Event Details Route: ", this.route.snapshot.params['id']);
    const id = this.route.snapshot.params['id'];
    this.eventsService.getEventById(id).subscribe(data => {
      this.eventDetails = data;

      console.log("Event Detail of: ", data)
    }, (error) => {
      console.log("Error occured while fetching Event details", error.message)
    })
}
  

  
}
