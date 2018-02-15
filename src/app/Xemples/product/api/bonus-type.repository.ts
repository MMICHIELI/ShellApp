// Angular 2
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
// Models
import { ReferentielModel } from '../../models/referentiel.model';
// Services
import { VideoApiService } from './video-api.service';

@Injectable()
export class BonusTypeRepository extends VideoApiService {

  constructor(private http: Http) {
    super();
  }

  // GET bonus types for production
  public getAll(language: string): Observable<ReferentielModel[]> {
    return this.http.get(this.apiUrl + 'bonus-types?language=' + language)
      .map((res) => new ReferentielModel().fromJSONs(res.json()))
      .catch(this.handleError);
  }

  // GET bonus type by ID
  public getById(bonusTypeId: number, language: string): Observable<ReferentielModel> {
    return this.http.get(this.apiUrl + 'bonus-types/' + bonusTypeId + '/?language=' + language)
      .map((res) => new ReferentielModel().fromJSON(res.json()))
      .catch(this.handleError);
  }
}
