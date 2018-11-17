import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ActivitiesService } from './services/activities.service';
import { ProgramsService } from './services/programs.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProgramsService,
    ActivitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
