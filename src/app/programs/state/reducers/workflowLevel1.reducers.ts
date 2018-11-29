import { EProgramActions, ProgramActions } from '../actions/workflowLevel1.actions';

import { initialProgramState, IProgramState } from '../workflowLevel1.state';

export const workflowLevel1Reducers = (
  state = initialProgramState,
  action: ProgramActions
): IProgramState => {
  switch (action.type) {
    case EProgramActions.GetProgramsSuccess: {
      return {
        ...state,
        programs: action.payload
      };
    }
    case EProgramActions.GetProgramSuccess: {
      return {
        ...state,
        selectedProgram: action.payload
      };
    }

    default:
      return state;
  }
};
