import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http'
import 'rxjs';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EliteApi {

  private baseUrl: string = 'https://elite-schedule-app-892b4.firebaseio.com';
  currentTourney: any = {};

  constructor(private http: Http) {

  }

  getTournaments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments.json`)
      .map((response: Response) => {
        return response.json();
      });
  }

  getTournamentData(tourneyId): Observable<any> {
    return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map((response: Response) => {
        this.currentTourney = response.json();
        return this.currentTourney;
      })
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}
