import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';
import { ActivitiesService } from './services/activities.service';
import { ProgramsService } from './services/programs.service';
import { appReducers } from './programs/state/reducers/app.reducers';
import { WorkflowLevel1Effects } from './programs/state/effects/workflowLevel1.effects';
import { WorkflowLevel2Effects } from './programs/state/effects/workflowLevel2.effects';

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
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ WorkflowLevel1Effects, WorkflowLevel2Effects], ),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
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
