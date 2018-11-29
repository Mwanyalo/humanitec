import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

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
      this.activity = this.activityForm.value;
      this.activity.workflowlevel1 = `https://dev-api.toladata.io/api/workflowlevel1/${this.id}`;
      // this._store.dispatch(new AddActivity(this.activity));
      this.activitiesService.addActivity(this.activity).subscribe(data => {
      });
    }
  }

  close() {
      this.dialogRef.close();
  }

}
