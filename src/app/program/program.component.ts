import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Store, select } from '@ngrx/store';
import * as moment from 'moment';

import { IAppState } from '../programs/state/app.state';
import { ActivityComponent } from '../activity/activity.component';
import { DeleteActivity } from '../programs/state/actions/workflowLevel2.actions';
import { selectActivityList } from '../programs/state/selectors/workflowLevel2.selectors';
import { appConfig } from '../appConfig';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  public url_id: number;
  activities = [];

  constructor(private route: ActivatedRoute, private _store: Store<IAppState>, private dialog: MatDialog) {
    this._store.pipe(select(selectActivityList));
  }

  ngOnInit() {
   this.url_id = +this.route.snapshot.paramMap.get('id');
   this.activitiesFilter(this.url_id);
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

  activitiesFilter(id) {
    this._store.pipe(select(selectActivityList)).subscribe((value) => {
      console.log(value);
      value.filter((activity) => {
        if (activity.workflowlevel1 === `${appConfig.programsUrl}/${id}/`) {
          this.activities.push(activity);
        }
        });
    });
  }

  deleteActivity(id) {
    this._store.dispatch(new DeleteActivity(id));
    // this.activitiesService.deleteActivity(id).subscribe(data => {
    //   alert('Actity deleted successfully');
    // });
  }

}
