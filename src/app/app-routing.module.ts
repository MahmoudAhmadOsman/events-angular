import { FeaturedEventsComponent } from './components/featured-events/featured-events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedEventsDetailsComponent } from './components/featured-events-details/featured-events-details.component';
import { SearchEventResultComponent } from './components/search-event-result/search-event-result.component';

const routes: Routes = [
 
  {
     path: "", component: FeaturedEventsComponent
  },
  {
    path: "events", children: [
      { path: "", component: FeaturedEventsComponent },
      { path: "events-details/:id/:title", component: FeaturedEventsDetailsComponent },
      { path: "search-events-restult", component: SearchEventResultComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
