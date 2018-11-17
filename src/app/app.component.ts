import { Component } from '@angular/core';

import { ProgramsService } from './services/programs.service';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'humanitec';

  constructor(public programsServices: ProgramsService, public activitiesService: ActivitiesService) {
    programsServices.getProgramsList().subscribe(data => {
      console.log('prog: ', data);
    });

    activitiesService.getActivitiesList().subscribe(data => {
      console.log('act: ', data);
    });
  }
}
