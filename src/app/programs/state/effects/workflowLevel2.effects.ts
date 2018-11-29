import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap } from 'rxjs/operators';
import { IActivity } from '../../../model/activity';

import { IAppState } from '../app.state';

import {
  EActivityActions,
  GetActivities,
  GetActivitiesSuccess,
  AddActivity,
  AddActivitySuccess,
  EditActivity,
  EditActivitySuccess,
  DeleteActivity,
  DeleteActivitySuccess
} from '../actions/workflowLevel2.actions';
import { ActivitiesService } from '../../../services/activities.service';
import { selectActivityList } from '../selectors/workflowLevel2.selectors';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class WorkflowLevel2Effects {

  @Effect()
  getactivities$ = this._actions$.pipe(
    ofType<GetActivities>(EActivityActions.GetActivities),
    switchMap((action: GetActivities) => {
      return this._activityService.getActivitiesList().pipe(
        map((response) => new GetActivitiesSuccess(response))
      );
    })
  );

  @Effect()
  deleteActivity$ = this._actions$.pipe(
    ofType<DeleteActivity>(EActivityActions.DeleteActivity),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectActivityList))),
    switchMap((action: DeleteActivity) => {
      const id = action[0];
      return this._activityService.deleteActivity(id).pipe(
        map((response: any) => new DeleteActivitySuccess(response))
      );
    })
  );

  // @Effect()
  // getPrograms$: Observable<any> = this._actions$.pipe(
  //   ofType<GetPrograms>(EProgramActions.GetPrograms),
  //   switchMap((action: GetPrograms) => {
  //     return this._programService.getProgramsList().pipe(
  //       map((response) => new GetProgramsSuccess(response))
  //     );
  //   })
  // );

  // @Effect()
  // addActivity$ = this._actions$.pipe(
  //   ofType<AddActivity>(EActivityActions.AddActivity),
  //   map(action => action.payload),
  //   withLatestFrom(this._store.pipe(select(selectActivityList))),
  //   switchMap((action: AddActivity) => {
  //     return this._activityService.addActivity(action).pipe(
  //       map((response: any) => new AddActivitySuccess(response))
  //     );
  //   })
  // );


  // @Effect()
  // editActivity$ = this._actions$.pipe(
  //   ofType<EditActivity>(EActivityActions.EditActivity),
  //   map(action => action.payload),
  //   withLatestFrom(this._store.pipe(select(selectProgramList))),
  //   switchMap(([id, programs]) => {
  //     const selectedProgram = programs.filter(program => program.id === +id)[0];
  //     return of(new EditActivitySuccess(selectedProgram));
  //   })
  // );



  constructor(
    private _activityService: ActivitiesService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) { }
}
