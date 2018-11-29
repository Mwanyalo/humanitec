import { createSelector } from '@ngrx/store';

import { IAppState } from '../app.state';
import { IActivityState } from '../workflowLevel2.state';

const selectActivities = (state: IAppState) => state.activities;

export const selectActivityList = createSelector(
  selectActivities,
  (state: IActivityState) => state.activities
);

export const selectSelectedActivity = createSelector(
  selectActivities,
  (state: IActivityState) => state.selectedActivity
);


