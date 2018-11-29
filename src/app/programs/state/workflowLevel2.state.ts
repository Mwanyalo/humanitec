import { IActivity } from '../../model/activity';

export interface IActivityState {
  activities: IActivity[];
  selectedActivity: IActivity;
}

export const initialActivityState: IActivityState = {
  activities: null,
  selectedActivity: null,
};

