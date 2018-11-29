import { Action } from '@ngrx/store';

import { IActivity } from '../../../model/activity';

export enum EActivityActions {
  GetActivities = '[Activity] Get Activities',
  GetActivitiesSuccess = '[Activity] Get Activities Success',

  AddActivity = '[Activity] Add Activity',
  AddActivitySuccess = '[Activity] Add Activity Success',

  EditActivity = '[Activity] Edit Activity',
  EditActivitySuccess = '[Activity] Edit Activity Success',

  DeleteActivity = '[Activity] Delete Activity',
  DeleteActivitySuccess = '[Activity] Delete Activity Success'
}

export class GetActivities implements Action {
  public readonly type = EActivityActions.GetActivities;
}

export class GetActivitiesSuccess implements Action {
  public readonly type = EActivityActions.GetActivitiesSuccess;
  constructor(public payload: IActivity[]) {
    localStorage.setItem('activities', JSON.stringify(payload));
  }
}

export class AddActivity implements Action {
  public readonly type = EActivityActions.AddActivity;
  constructor(public payload: IActivity) { }
}

export class AddActivitySuccess implements Action {
  public readonly type = EActivityActions.AddActivitySuccess;
  constructor(public payload: IActivity) {}
}

export class EditActivity implements Action {
  public readonly type = EActivityActions.EditActivity;
  constructor(public payload: IActivity) {}
}

export class EditActivitySuccess implements Action {
  public readonly type = EActivityActions.EditActivitySuccess;
  constructor(public payload: IActivity) {}
}

export class DeleteActivity implements Action {
  public readonly type = EActivityActions.DeleteActivity;
  constructor(public payload: number) {
    console.log(payload);
  }
}

export class DeleteActivitySuccess implements Action {
  public readonly type = EActivityActions.DeleteActivitySuccess;
  constructor(public payload: IActivity) {}
}


export type ActivityActions = GetActivities | GetActivitiesSuccess | AddActivity | AddActivitySuccess | EditActivity | EditActivitySuccess | DeleteActivity | DeleteActivitySuccess;
