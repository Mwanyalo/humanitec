import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { httpOptions, appConfig } from '../appConfig';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  getActivitiesList(): Observable<any> {
    return this.http.get(appConfig.activitiesUrl, httpOptions);
  }

}
