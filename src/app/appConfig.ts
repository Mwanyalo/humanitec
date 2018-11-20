import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g'
  })
};

export const appConfig = {
    programsUrl: 'https://dev.toladata.io/api/workflowlevel1',
    activitiesUrl: 'https://dev.toladata.io/api/workflowlevel2'
};
