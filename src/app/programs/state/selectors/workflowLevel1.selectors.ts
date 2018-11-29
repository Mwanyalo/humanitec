import { createSelector } from '@ngrx/store';

import { IAppState } from '../app.state';
import { IProgramState } from '../workflowLevel1.state';

const selectPrograms = (state: IAppState) => state.programs;

export const selectProgramList = createSelector(
  selectPrograms,
  (state: IProgramState) => state.programs
);

export const selectSelectedProgram = createSelector(
  selectPrograms,
  (state: IProgramState) => state.selectedProgram
);
