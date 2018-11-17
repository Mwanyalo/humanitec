import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { httpOptions, appConfig } from '../appConfig';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient ) { }

  getProgramsList(): Observable<any> {
    return this.http.get(appConfig.programsUrl, httpOptions);
  }


}
