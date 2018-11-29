import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import {MAT_DIALOG_DATA, MatDialogRef, DateAdapter, MatNativeDateModule, MatDatepickerModule, MAT_DATE_FORMATS} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { ActivitiesService } from '../services/activities.service';

fdescribe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  const mockActivitiesService = {
    addActivity: () => {}
  };

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityComponent ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        MaterialModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DateAdapter, useValue: {} },
        { provide: MatDatepickerModule, useValue: {} },
        { provide: MatNativeDateModule, useValue: {} },
        { provide: MAT_DATE_FORMATS, useValue: {} },
        {
          provide: ActivitiesService,
          useValue: mockActivitiesService
        },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // mockActivity = { id: 1, name: 'activity 1', expected_start_date: '1/1/2018', expected_end_date: '1/1/2019', workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/1'};

  });

  it('should create a new activity', () => {
    spyOn(mockActivitiesService, 'addActivity').and.returnValue({ subscribe: () => {} });
    // do stuff
    expect(mockActivitiesService.addActivity).toHaveBeenCalled();

    // component.activity = mockActivity;
    //   component.submitActivity();
    //    fixture.detectChanges();
    //    fixture.whenStable().then( () => {
    //       fixture.detectChanges();
    //       expect(spyOnAdd.calls.any()).toBeTruthy();
    //    });
  });
});
