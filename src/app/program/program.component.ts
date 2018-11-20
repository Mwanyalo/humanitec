import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import * as moment from 'moment';

import { Activity } from '../model/activity';
import { ActivitiesService } from '../services/activities.service';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  public activities: Array<Activity> = [];
  public url_id: number;

  constructor(private route: ActivatedRoute, public activitiesService: ActivitiesService, private dialog: MatDialog) { }

  ngOnInit() {
   this.url_id = +this.route.snapshot.paramMap.get('id');
   this.activitiesList(this.url_id);
  }

  openDialog() {
    const id =  this.url_id;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id
    };

    this.dialog.open(ActivityComponent, dialogConfig);
  }

  activitiesList(id) {
    this.activitiesService.getActivitiesList(id).subscribe(data => {
     this.activities = data;
     console.log(this.activities);
    });
  }

  deleteActivity(id) {
    this.activitiesService.deleteActivity(id).subscribe(data => {
      alert('Actity deleted successfully');
    });
  }

}
