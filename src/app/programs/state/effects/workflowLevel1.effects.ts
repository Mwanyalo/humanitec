import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, mergeMap } from 'rxjs/operators';

import { IAppState } from '../app.state';

import {
  GetProgramsSuccess,
  EProgramActions,
  GetProgramSuccess,
  GetProgram,
  GetPrograms
} from '../actions/workflowLevel1.actions';
import { ProgramsService } from '../../../services/programs.service';

import { selectProgramList } from '../selectors/workflowLevel1.selectors';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class WorkflowLevel1Effects {
  @Effect()
  getProgram$ = this._actions$.pipe(
    ofType<GetProgram>(EProgramActions.GetProgram),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectProgramList))),
    switchMap(([id, programs]) => {
      const selectedProgram = programs.filter(program => program.id === +id)[0];
      return of(new GetProgramSuccess(selectedProgram));
    })
  );

  @Effect()
  getPrograms$: Observable<any> = this._actions$.pipe(
    ofType<GetPrograms>(EProgramActions.GetPrograms),
    switchMap((action: GetPrograms) => {
      return this._programService.getProgramsList().pipe(
        map((response) => new GetProgramsSuccess(response))
      );
    })
  );

  constructor(
    private _programService: ProgramsService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) { }
}
