import { Action } from '@ngrx/store';

import { IProgram } from '../../../model/program';

export enum EProgramActions {
  GetPrograms = '[Program] Get Programs',
  GetProgramsSuccess = '[Program] Get Programs Success',
  GetProgram = '[Program] Get Program',
  GetProgramSuccess = '[Program] Get Program Success'
}

export class GetPrograms implements Action {
  public readonly type = EProgramActions.GetPrograms;
}

export class GetProgramsSuccess implements Action {
  public readonly type = EProgramActions.GetProgramsSuccess;
  constructor(public payload: IProgram[]) {
    localStorage.setItem('programs', JSON.stringify(payload));
  }
}

export class GetProgram implements Action {
  public readonly type = EProgramActions.GetProgram;
  constructor(public payload: number) {}
}

export class GetProgramSuccess implements Action {
  public readonly type = EProgramActions.GetProgramSuccess;
  constructor(public payload: IProgram) {}
}

export type ProgramActions = GetPrograms | GetProgramsSuccess | GetProgram | GetProgramSuccess;
