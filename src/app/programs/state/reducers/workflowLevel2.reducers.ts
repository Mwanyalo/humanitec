import { EActivityActions, ActivityActions } from '../actions/workflowLevel2.actions';

import { initialActivityState, IActivityState } from '../workflowLevel2.state';

export const workflowLevel2Reducers = (
  state = initialActivityState,
  action: ActivityActions
): IActivityState => {
  switch (action.type) {
    case EActivityActions.GetActivitiesSuccess: {
      return {
        ...state,
        activities: action.payload
      };
    }
    case EActivityActions.AddActivitySuccess: {
      return {
        ...state,
        selectedActivity: action.payload
      };
    }
    case EActivityActions.DeleteActivitySuccess: {
      return {
        ...state,
        selectedActivity: action.payload
      };
    }

    default:
      return state;
  }
};



