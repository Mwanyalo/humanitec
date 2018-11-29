import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../app.state';
import { workflowLevel1Reducers } from './workflowLevel1.reducers';
import { workflowLevel2Reducers } from './workflowLevel2.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  programs: workflowLevel1Reducers,
  activities: workflowLevel2Reducers
};
