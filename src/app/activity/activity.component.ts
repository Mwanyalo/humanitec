import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as moment from 'moment';

import { IActivity } from '../model/activity';
import { Store } from '@ngrx/store';
import { IAppState } from '../programs/state/app.state';
import { AddActivity } from '../programs/state/actions/workflowLevel2.actions';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activityForm: FormGroup;
  public id: number;

  activity: IActivity;

  constructor(public formBuilder: FormBuilder, private dialogRef: MatDialogRef<ActivityComponent>,
    @Inject(MAT_DIALOG_DATA) {id}: IActivity, public activitiesService: ActivitiesService, private _store: Store<IAppState>, ) {
        this.activityForm = this.formBuilder.group({
          name: ['', Validators.required],
          expected_start_date: [''],
          expected_end_date: [''],
        });
        this.id = id;
    }

  ngOnInit() { }

  submitActivity() {
    if (this.activityForm.valid) {
      this.dialogRef.close(this.activityForm.value);
      const model: any = {};

      model.expected_start_date = moment(this.activityForm.value.expected_start_date).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
      model.expected_end_date = moment(this.activityForm.value.expected_end_date).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
      model.name = this.activityForm.value.name;
      model.workflowlevel1 = `https://dev-api.toladata.io/api/workflowlevel1/${this.id}/`;
      this.activity = model;
      console.log(  this.activity);
      this._store.dispatch(new AddActivity(this.activity));
    }
  }

  close() {
      this.dialogRef.close();
  }

}
