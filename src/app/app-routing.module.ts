import { FeaturedEventsComponent } from './components/featured-events/featured-events.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {
     path: "", component: FeaturedEventsComponent
  }, {
    path: "events", component: FeaturedEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
