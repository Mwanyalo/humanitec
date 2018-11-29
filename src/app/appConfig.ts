import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25fdXVpZCI6ImI4NDdlNjFmLWRkMWYtNDM4YS05ZmQ3LTM5YzcwMmY4YTNkNiIsInVzZXJuYW1lIjoidG9sYSIsInJvbGUiOiJTdXBlclVzZXIiLCJleHAiOjE1NDM1MjE4ODYsImlzcyI6ImFjdGl2aXR5YXBpIiwiaWF0IjoxNTQzNDg1ODg2LCJ1c2VyX3V1aWQiOiI3YTI3NmI2MS02MmQ3LTRjMDQtYmMyZi0yZGQzMmZjMGIxNmMifQ.NsDb7VRVt5Q5MlY-2MFD07fP3D58GREPRIoHhsS6Kirgo4CxLp6zcyoyEUmWlq5BOo83JcU-nqFIvptjBZvHEGDF8DJjN0Iw0wl6bZaRjjB8QYweccaiFV3Tf0XBj-Ir1HWahumGyFwv0njzkcFur4PUS_pQ0TZaqshEONSLMFVZk-VphNpjYBjxdW3W3wV2ajctun8CYuImDOTBtWbv99r0ASDPa8iWnGEYRpzAA2M9KiTGmaj41jQIp8-SVMWeD7YvjxeUj8IK9qhmNcHYRmQrS0QFamj1MFeDaQFol26-4U52C5OaoRaup-P1js43OHigcffaXU217MKExRw1Gw'
  })
};

export const appConfig = {
    programsUrl: 'https://dev-api.toladata.io/api/workflowlevel1',
    activitiesUrl: 'https://dev-api.toladata.io/api/workflowlevel2'
};

