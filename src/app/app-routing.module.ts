import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramComponent } from './program/program.component';
import { ActivityComponent } from './activity/activity.component';
import { ProgramsComponent } from './programs/programs.component';


const routes: Routes = [
 { path: 'programs', component: ProgramsComponent },
 { path: 'program/:id', component: ProgramComponent },
 { path: 'activity', component: ActivityComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '/programs', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

