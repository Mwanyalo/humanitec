import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { ActivitiesService } from './services/activities.service';
import { ProgramsService } from './services/programs.service';

import { AppComponent } from './app.component';
import { ProgramComponent } from './program/program.component';
import { ActivityComponent } from './activity/activity.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramsComponent } from './programs/programs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    ActivityComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatMomentDateModule
  ],
  providers: [
    ProgramsService,
    ActivitiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
