import { FeaturedEventsComponent } from './components/featured-events/featured-events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedEventsDetailsComponent } from './components/featured-events-details/featured-events-details.component';
import { SearchEventResultComponent } from './components/search-event-result/search-event-result.component';
import { PostEventComponent } from './components/post-event/post-event.component';
import { EventPricingComponent } from './components/event-pricing/event-pricing.component';
import { EventTicketComponent } from './components/event-ticket/event-ticket.component';

const routes: Routes = [
  {
     path: "", component: FeaturedEventsComponent
  },
  {
    path: "events", children: [
      { path: "", component: FeaturedEventsComponent },
      { path: "events-details/:id/:title", component: FeaturedEventsDetailsComponent },
      {
        path: "event-ticket", component: EventTicketComponent 
      },
      { path: "search-events-restult", component: SearchEventResultComponent },
      { path: "post-events", component: PostEventComponent },
      { path: "event-pricing", component: EventPricingComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
