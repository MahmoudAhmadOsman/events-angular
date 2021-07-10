
import { HttpClientModule } from "@angular/common/http";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { PostEventsComponent } from './components/post-events/post-events.component';

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
    SearchEventResultComponent,
    PostEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
