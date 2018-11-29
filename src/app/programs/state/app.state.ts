import { RouterReducerState } from '@ngrx/router-store';

import { initialProgramState, IProgramState } from './workflowLevel1.state';
import { initialActivityState, IActivityState } from './workflowLevel2.state';

export interface IAppState {
  router?: RouterReducerState;
  programs: IProgramState;
  activities: IActivityState;
}

export const initialAppState: IAppState = {
  programs: initialProgramState,
  activities: initialActivityState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
