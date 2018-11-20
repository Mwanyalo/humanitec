import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProgramsService } from '../services/programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  public programs: Array<any> = [];
  public activities: Array<any> = [];

  constructor( public programsServices: ProgramsService, public route: Router) {

  }

  ngOnInit() {
    this.programsList();
  }

  programsList() {
    this.programsServices.getProgramsList().subscribe(data => {
      this.programs =  data;
      console.log(this.programs);
    });
  }

  openProgram(id) {
    this.route.navigate([ `program/${id}`]);
  }

}
