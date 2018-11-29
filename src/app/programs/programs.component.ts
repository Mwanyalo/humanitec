import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { GetPrograms } from './state/actions/workflowLevel1.actions';
import { GetActivities } from './state/actions/workflowLevel2.actions';
import { Store, select } from '@ngrx/store';

import { IAppState } from './state/app.state';
import { selectProgramList } from './state/selectors/workflowLevel1.selectors';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programs = this._store.pipe(select(selectProgramList));
  constructor( private _store: Store<IAppState>, public route: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetPrograms());
    this._store.dispatch(new GetActivities());
  }

  openProgram(id) {
    this.route.navigate([ `program/${id}`]);
  }

}
