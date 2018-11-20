import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as moment from 'moment';

import { Activity } from '../model/activity';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activityForm: FormGroup;
  public id: number;

  constructor(public formBuilder: FormBuilder, private dialogRef: MatDialogRef<ActivityComponent>,
    @Inject(MAT_DIALOG_DATA) {id}: Activity, public activitiesService: ActivitiesService ) {
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
      const activity = this.activityForm.value;
      activity.workflowlevel1 = `https://dev.toladata.io/api/workflowlevel1/${this.id}`;
      this.activitiesService.addActivity(activity).subscribe(data => {
      });
    }
  }

  close() {
      this.dialogRef.close();
  }

}
