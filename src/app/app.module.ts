
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PostEventComponent } from './components/post-event/post-event.component';
import { FeaturedEventsComponent } from './components/featured-events/featured-events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FeaturedEventsDetailsComponent } from './components/featured-events-details/featured-events-details.component';
import { DescshortnerPipe } from './pipes/descshortner.pipe';
import { SearchEventResultComponent } from './components/search-event-result/search-event-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PostEventComponent,
    FeaturedEventsComponent,
    NavbarComponent,
    LoadingComponent,
    FeaturedEventsDetailsComponent,
    DescshortnerPipe,
    SearchEventResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
