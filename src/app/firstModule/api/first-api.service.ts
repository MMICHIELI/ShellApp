// Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirstApiService {
  public apiUrl: string = MY_SHELL_API_URL + ':' + MY_SHELL_API_PORT + '/my-first-api';
  // public apiUrl: string = 'http://localhost:8080/my-first-api/';
  public header: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor() {}

  // TODO: variabiliser les attributs (faire un fichier json)
  public handleError(error: Response) {
    return Observable.throw(error.json() || 'api error');
  }

  public extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    return body || {};
  }
}
