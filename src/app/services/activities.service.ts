import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { httpOptions, appConfig } from '../appConfig';
import { IActivity } from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  getActivitiesList(): Observable<any> {
    const url = `${appConfig.activitiesUrl}`;
    return this.http.get<any>(url, httpOptions);
  }

  addActivity(activity: IActivity) {
    const url = `${appConfig.activitiesUrl}`;
    return this.http.post(url, activity, httpOptions);
  }

  deleteActivity(id) {
    const url = `${appConfig.activitiesUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

}
